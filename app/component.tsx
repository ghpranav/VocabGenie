export default function Component() {
  return (
    <>
      <main className="w-full max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12 lg:px-8 lg:py-16 dark:bg-gray-950 dark:text-gray-50">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Flashcard Decks</h1>
          <div className="flex items-center space-x-2">
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 transform hover:scale-105">
            <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
              <img
                alt="Flashcard Deck"
                className="w-full h-full object-cover object-center"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg font-semibold mb-2">JavaScript Fundamentals</h2>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-2/3" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 transform hover:scale-105">
            <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
              <img
                alt="Flashcard Deck"
                className="w-full h-full object-cover object-center"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg font-semibold mb-2">React Fundamentals</h2>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-1/2" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 transform hover:scale-105">
            <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
              <img
                alt="Flashcard Deck"
                className="w-full h-full object-cover object-center"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg font-semibold mb-2">Python Basics</h2>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-3/4" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 transform hover:scale-105">
            <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
              <img
                alt="Flashcard Deck"
                className="w-full h-full object-cover object-center"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg font-semibold mb-2">SQL Fundamentals</h2>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-1/4" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 transform hover:scale-105">
            <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
              <img
                alt="Flashcard Deck"
                className="w-full h-full object-cover object-center"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg font-semibold mb-2">HTML & CSS Basics</h2>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-2/3" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 transform hover:scale-105">
            <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
              <img
                alt="Flashcard Deck"
                className="w-full h-full object-cover object-center"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg font-semibold mb-2">Data Structures</h2>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-1/2" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 transform hover:scale-105">
            <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
              <img
                alt="Flashcard Deck"
                className="w-full h-full object-cover object-center"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg font-semibold mb-2">Algorithms</h2>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-3/4" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 transform hover:scale-105">
            <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
              <img
                alt="Flashcard Deck"
                className="w-full h-full object-cover object-center"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg font-semibold mb-2">Machine Learning</h2>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-1/4" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 transform hover:scale-105">
            <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
              <img
                alt="Flashcard Deck"
                className="w-full h-full object-cover object-center"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg font-semibold mb-2">Git & GitHub</h2>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80 transition-all duration-500 ">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl mx-4 md:mx-6 lg:mx-8 overflow-hidden">
          <div className="relative h-80 sm:h-96 md:h-[480px] lg:h-[560px] overflow-hidden">
            <img
              alt="Flashcard Deck"
              className="w-full h-full object-cover object-center"
              height={600}
              src="/placeholder.svg"
              style={{
                aspectRatio: "800/600",
                objectFit: "cover",
              }}
              width={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-2xl font-semibold mb-2" />
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-3/4" />
              </div>
            </div>
          </div>
          <div className="p-4 md:p-6 lg:p-8">
            <h3 className="text-xl font-semibold mb-4">Flashcards</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img
                    alt="Flashcard"
                    className="w-full h-full object-cover object-center"
                    height={300}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg font-semibold mb-1">What is a variable in JavaScript?</h4>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A variable is a named storage location in memory that can hold a value.
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img
                    alt="Flashcard"
                    className="w-full h-full object-cover object-center"
                    height={300}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg font-semibold mb-1">What is a function in JavaScript?</h4>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A function is a reusable block of code that performs a specific task.
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}