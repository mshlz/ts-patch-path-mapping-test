import { uid } from "@/src/core/codec";
import * as core from "@/src/core"
import core2, {uid as K} from "@/src/core"

export const doSomething  = () => uid()
export const doSomething3  = () => {
    core.asyncFoo
}

const lazy  = import("@/src/core/async")

lazy.then(module => {
    module.asyncFoo().then(console.log)
})

console.log("KKKK")

console.log(core)
console.log(core2)