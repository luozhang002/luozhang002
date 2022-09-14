
let name1: any = "lucifer"
console.log(name1)


const id = (arg) => arg

type idBoolean = (arg: boolean) => boolean;
type idNumber = (arg: number) => number;
type idString = (arg: string) => string;


function idTemplate<T>(arg: T): T {
    return arg;
}

function idTemplate1<T>(arg: T): T {
    return arg;
}

enum Sex {
    Man,
    Woman,
    Unknow
}

interface Person {
    name: String,
    sex: Sex;
    age: number
}

interface MarketPerson {
    name?: string;
    sex?: Sex;
    age?: number;
    phone: string;
}

type MakerPersonTemplate = Person & {phone: string}

import ProtoTypes from "prop-types"

MyComponent.propTypes = {
    optionnalArray: ProtoTypes.array,
    optionalBool: ProtoTypes.bool
}


class Greeting extends React.Component<any, any> {
    static defaultProps = {
        name: 'stranger'
    }

    render() {
        return (
            <div>hello, {this.props.name}</div>
        )
    }
}
