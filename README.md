# Rill messenger app

## Overal scheme

Meta-lib is a way to achieve modules isolation without losing code reusability. 
The general steps for fulfilling such intention is next:
* `Separate layers` - each layer produces some certain product type (for example, CSS rules, styled-components, data providers)
* `Minimize lib dependency from other libs` - libs should be designed to be like pipeline factories which use the products from the layer above as an input and produce different product type as the output. That reveals the development/assembling flow and helps to visualize it. Also, that reduces any efforts to think about where to place some certain function (it will be placed near the other functions that produce/operate with a similar type) 
* `Implicitly indicate what does the lib use and what lib is the source of code` - each lib contains one top folder (_employee) which in turn, contains a list of files (name of each file is the same as the lib name that donates code). That helps to define and visualize what are the dependencies of the lib.
* `Separate the most abstract types/function into [layer]-meta lib` - this is the implementation of the inversion of control design principle. Each lib should strive to be dependent only on the most abstract stuff (types, constants, function). The [x]-meta lib should be the most resilience lib for any significant refactoring. But due to the abstract nature of its stuff, it's quite easy to achieve this.