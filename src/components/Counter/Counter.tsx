import { Component } from "react";

import styles from "./Counter.module.scss";

interface CounterState {
  count: number;
}

class Counter extends Component<object, CounterState> {
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState((prevState) => ({ count: prevState.count - 1 }));
    }
  };

  render() {
    return (
      <div className={styles.wrap}>
        <h3 className={styles.wrapTitle}>Счетчик: {this.state.count}</h3>
        <div className={styles.wrapBtn}>
          <button onClick={this.increment} className={styles.wrapBtnItem}>
            Увеличить
          </button>
          <button onClick={this.decrement} className={styles.wrapBtnItem}>
            Уменьшить
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
