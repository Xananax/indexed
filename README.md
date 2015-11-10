# Indexed

A fairly simple indexed array, mutable or immutable (togglable). Can be consumed as:

- standalone functions
- augmented array object
- closure over your variables
- class

So there's really something suitable for all coding styles.

The same array can be indexed by multiple indexes; for example, if you set an index `name` and an index `path`, items will be indexed on one, or the other, or both, or none, depending if they `haveOwnProperty` `name` or `path`. There is no enforcement on having an array comprised of same objects.  
However, indexes will not keep track of uniqueness, that's up to you. If you add an object with `{name:'a',someProp:'something'}` and then push another `{name:'a',someProp:'somethingElse'}`, the index `a` will be set to the second object.

The project is very new and API is far from being stabilized.

Documentation will come later, in the meantime, have a look at the tests, all 168 of them, which is not enough, but a good start. There's a generated [`spec.md`](./spec.md).

MIT License.
