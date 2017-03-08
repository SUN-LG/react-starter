import {connect} from 'react-redux'
import {increment, doubleAsync} from '../modules/counter'
import Counter from '../components/Counter'

const mapDispatchToProps = {
  //将dispatch(increment())注入到组件props.increment， 但是当该属性绑定到onClick上时，会自动传入点击事件对象e（increment(e)）。e会替换increment的默认值，导致出现错误。
  //解决办法有两个，1是使用箭头函数包装一下increment,() => increment(1)
  //另一种解决办法是，定义increment时，默认值改为一个对象
  //const increment = ({value = 1} = {value: 1}) => {}
  // increment,
  increment: () => increment(1),
  doubleAsync
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
