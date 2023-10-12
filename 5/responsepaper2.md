Response paper:
Describe in your own words, what is data normalization and what's the goal of the first, second, and third normal forms. Feel free to use other resources, but you must paraphrase them.

Data normalization is a way of rearranging or reorganizing the data structure (eg. tables) so as to remove  redundancy (eg. duplicate data). This is achieved by following the three normal forms. 
The first normal form states that in a table of data, (1) no two rows should contain exactly the same data, (2) each data should be placed in its individual cell (eg. no more than one piece of data in one cell), (3) the data should not consist of multiple distinct subparts. It should contain a "primary key", which is a unique ID for a row of data.

The second normal form states that (1) the database must already follow all the rules of the first normal form, and (2) non-prime data should be linked to a candidate key for any reference.

The third normal form states that (1) the database must already follow all the rules of the first and second normal forms, and (2) there should be a composite key in place of a duplicate data in any column. 








Reference notes for response paper 2

First normal form:
* all rows must be unique
* each cell must only contain a single value (not a list)
* Each value should be non divisible

Second normal form = no partial dependencies
* Database must be in First Normal Form
* No partial dependcy = all non-prime attributes should be fully functionally dependent on the candidate key

Third normal form = no transitive dependencies
* Database must be in First and Second normal form
* no transitive dependency = all fields must only be determinable by the primary/composite key, not by other keys

(tables cant have duplicate cells basically???)

