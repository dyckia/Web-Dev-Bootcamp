API stands for application programming interface

APIs are the interfaces for application/code to talk to each other.

Data Formats
When we use the internet, we make HTTP request and get HTML back.

APIs don't respond with HTML. HTML contains information about the structure of a page. APIs respond with data, not structure.

Most common data formats are XML and JSON.

XML is syntacticly similar to HTML. 
eXtensible Markup Language
<person>
    <age>21</age>
    <name>Travis</name>
    <city>Los Angeles</city>
</person>

JSON Javascript Object Notation
Similar to JavaScript objects, but everything is a string(even for the keys).
{
    "person": {
        "age": "21",
        "name": "Travis",
        "city": "Los Angeles"
    }
}


when a api returns, it returns as string

JSON.parse()

req.query.inputName

General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb 

Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb 