
## Algorithms

###Algorithm Definition:
Designed to solve a problem as **efficiently** as possible.

Most important measure is time although computer resources should not be ignored either.

The performance of an algorithm is not quanified ina  atime unit since it ofeten depends of the data set size and characteritics

Rather performance is noted using the BIG O (big-oh) notation.

###Big O notation:

It represent the relation between the data size(N) and the algorithm typical performance.

So for example an algorithm that requires going through te whole dataset once would have the notation O(N)

Now say you have an algorithm that needs to compare each data entry to all the other ones in the set, that whole
take N square time to complete: O(N2)

Note that a algorithm that would require going through the whole dataset twice would still be 0(N)
While you woud be tempted to say 2xO(N), often such constants are left off because In comparason to
the N factor they are meaningless in terms of time on a large dataset.

Usually any perfomance bellow O(N2) is considered unusable or too slow.

###Average / best / worst case:
While some algorithms have linear perfomance other might vary depending on the data, potenatially exposing an "unnacptable" worst case.

One example of this is [quick sort](http://en.wikipedia.org/wiki/Quicksort), while it averages a good perfomace
of N [lg](http://en.wikipedia.org/wiki/Logarithm) N, it has a worst case of N2 if the data was already perfectly sorted.

It is important to think of the worst case as in an extreme case it could take days to complete.

It is sometimes more efficient or evrn necessary to detect such worst case and you another algorithm in those cases.

The best case is not really important as it will rarely happen and cause no issues, however it can be of
interest if you have control over the data and know it will often/always be such as to hit the best case.

###Algorithm optimization

Of course once you have found the performance of your algorithm, you will want to focus on making the code
that is going to being called "exponent of N" times as efficient as possible.
Try to optimize that code by avoiding things like I/O, thread locking, creating tons of objects etc...

******************

Next: [Data Structures](prg_data_structures)