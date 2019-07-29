import module1 from './mk1'
import module2 from './mk2'
import '../scss/index.scss'

let testAA = (str) => {
    module1("开始引用模块1"+str);
    module2("开始引用模块2"+str);
}
testAA("走一个");