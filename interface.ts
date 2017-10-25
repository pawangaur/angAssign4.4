/**
 * Method Decorator
 */

/**
 * [MethodDecorator description]
 * @param {Object}                       target      [description]
 * @param {string}                       propertyKey [description]
 * @param {TypedPropertyDescriptor<any>} descriptor  [description]
 */
function MethodDecorator(
    target: Object, // The prototype of the class
    propertyKey: string, // The name of the method
    descriptor: TypedPropertyDescriptor<any>
    ) {
    console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}
class DecoratorExample {
    @MethodDecorator
    method() {
    }
}
/**
 * Class decorator without parameter
*/

function ClassDecoratorParams(param1: number, param2: string) {
    return function(
        target: Function // The class the decorator is declared on
        ) {
        console.log("ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);
    }
}

@ClassDecoratorParams(1, "a")
@ClassDecoratorParams(2, "b")

class ClassDecoratorParamsExample {
}
