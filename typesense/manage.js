import client from "./client";

async function createCollection() {
  try {
    const schema = {
      name: "books",
      fields: [
        { name: "id", type: "string" },
        { name: "title", type: "string" },
        { name: "author", type: "string" },
        { name: "year", type: "int32" },
        { name: "rating", type: "float" },
      ],
      default_sorting_field: "year",
    };

    const collection = await client.collections().create(schema);
    console.log("Collection created:", collection);
  } catch (error) {
    console.error("Error creating collection:", error);
  }
}
async function addDocument() {
  try {
    const document = {
      id: "1",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      rating: 4.2,
    };

    const result = await client
      .collections("books")
      .documents()
      .create(document);
    console.log("Document added:", result);
  } catch (error) {
    console.error("Error adding document:", error);
  }
}

async function searchBooks() {
  try {
    const searchParameters = {
      q: "gatsby",
      query_by: "title,author",
    };

    const results = await client
      .collections("books")
      .documents()
      .search(searchParameters);
    console.log("Search results:", results);
  } catch (error) {
    console.error("Error searching:", error);
  }
}

searchBooks();

async function deleteCollection() {
  try {
    await client.collections("books").delete();
    console.log("Collection deleted.");
  } catch (error) {
    console.error("Error deleting collection:", error);
  }
}

//   deleteCollection();
