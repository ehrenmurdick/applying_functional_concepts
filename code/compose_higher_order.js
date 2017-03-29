// =start
const asyncRead = (resource, callback) => {
  setTimeout(() => callback(resource), 100)
}

asyncRead('a file', (fileData) => {
  asyncRead('a uri', (uriData) => {
    asyncRead('another thing', (thingData) => {
      // all three available
    })
  })
})

// =end
