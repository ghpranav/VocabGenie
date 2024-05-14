import json
import threading
import requests
from bs4 import BeautifulSoup
from html import unescape
import logging
from tqdm import tqdm
from threading import Thread


def get_word_and_explanation(url):
    """Fetches the word, its part of speech, explanation, and example from a redirected URL.

    Args:
        url: The initial URL to follow redirects from.

    Returns:
        A dictionary containing the word, part of speech, explanation, and example,
        or None if no redirects occur or parsing fails.
    """

    try:
        response = requests.get(url, allow_redirects=True)
        response.raise_for_status()  # Raise exception for non-2xx status codes

        if response.history:
            ending_word = response.url.split("/")[-1]
            explanation, example = None, None

            soup = BeautifulSoup(response.content, "html.parser")
            explanation_element = soup.find("div", class_="flashcard-text")
            if explanation_element:
                explanation = explanation_element.text.strip()
            example_element = soup.find("em", class_="flashcard-example")
            if example_element:
                example = example_element.text.strip()

            return {
                "word": ending_word,
                "type": explanation.split(":")[0] if explanation else None,
                "explanation": (
                    unescape(explanation.split(":")[1].strip()) if explanation else None
                ),
                "example": unescape(example) if example else None,
            }
        else:
            logging.warning(f"No redirect occurred for URL: {url}")
            return None

    except requests.exceptions.RequestException as e:
        logging.error(f"Error fetching explanation for URL: {url} - {e}")
        return None


def scrape_words(url, num_words, word_data, lock):
    """Scrapes words and explanations from a URL and writes to a JSON file.

    Args:
        url: The URL to scrape words and explanations from.
        num_words: The number of words to scrape.
        word_data: A dictionary to store the scraped words and explanations.
        lock: A lock to ensure thread-safe access to word_data.
    """

    with tqdm(
        total=num_words, desc=f"Words scraped for {url.split('/')[-1]}"
    ) as progress_bar:
        while len(word_data) < num_words:
            word_and_explanation = get_word_and_explanation(url)
            with lock:
                if (
                    word_and_explanation
                    and word_and_explanation["word"]
                    and word_and_explanation["word"] not in word_data
                ):
                    word = word_and_explanation["word"]
                    word_data[word] = {
                        "type": word_and_explanation["type"],
                        "explanation": word_and_explanation["explanation"],
                        "example": word_and_explanation["example"],
                    }
                    progress_bar.update(1)
                    logging.info(f"Captured word for '{url}': {word}")

        # Write word data to JSON file (one file per URL)
        json_data = json.dumps(word_data, indent=4)
        file_name = f"{url.split('/')[-1]}.json"
        with open(file_name, "w") as outfile:
            outfile.write(json_data)
        logging.info(f"Saved word data to file: {file_name}")


def main():
    """Main function to capture words and explanations for multiple URLs and write to JSON."""

    logging.basicConfig(
        filename="word_scraper.log",
        level=logging.INFO,
        format="%(asctime)s - %(levelname)s - %(message)s",
    )  # Configure logging

    url_data = [
        (
            "https://gre.magoosh.com/flashcards/vocabulary/decks/high-frequency-words",
            51,
        ),
        ("https://gre.magoosh.com/flashcards/vocabulary/decks/common-words-2", 51),
        ("https://gre.magoosh.com/flashcards/vocabulary/decks/common-words-3", 51),
        ("https://gre.magoosh.com/flashcards/vocabulary/decks/common-words-4", 51),
        ("https://gre.magoosh.com/flashcards/vocabulary/decks/common-words-5", 51),
        ("https://gre.magoosh.com/flashcards/vocabulary/decks/common-words-6", 51),
        ("https://gre.magoosh.com/flashcards/vocabulary/decks/basic-words-i", 50),
        ("https://gre.magoosh.com/flashcards/vocabulary/decks/basic-words-ii", 50),
        ("https://gre.magoosh.com/flashcards/vocabulary/decks/basic-words-3", 50),
        ("https://gre.magoosh.com/flashcards/vocabulary/decks/basic-words-4", 50),
        ("https://gre.magoosh.com/flashcards/vocabulary/decks/basic-words-5", 50),
        ("https://gre.magoosh.com/flashcards/vocabulary/decks/basic-words-6", 50),
        ("https://gre.magoosh.com/flashcards/vocabulary/decks/basic-words-7", 51),
        ("https://gre.magoosh.com/flashcards/vocabulary/decks/advanced-words-i", 50),
        ("https://gre.magoosh.com/flashcards/vocabulary/decks/advanced-words-ii", 51),
        ("https://gre.magoosh.com/flashcards/vocabulary/decks/advanced-words-3", 50),
        ("https://gre.magoosh.com/flashcards/vocabulary/decks/advanced-words-4", 51),
        ("https://gre.magoosh.com/flashcards/vocabulary/decks/advanced-words-5", 50),
        ("https://gre.magoosh.com/flashcards/vocabulary/decks/advanced-words-6", 50),
        ("https://gre.magoosh.com/flashcards/vocabulary/decks/advanced-words-7", 50),
    ]

    threads = []
    lock = threading.Lock()  # Lock for thread-safe access to word_data

    for url, num_words in url_data:
        word_data = {}
        thread = Thread(
            target=scrape_words,
            args=(url, num_words, word_data, lock),
        )
        threads.append(thread)
        thread.start()

    for thread in threads:
        thread.join()

    logging.info(
        "Collected words for all URLs. Check corresponding JSON files for details."
    )


if __name__ == "__main__":
    main()
