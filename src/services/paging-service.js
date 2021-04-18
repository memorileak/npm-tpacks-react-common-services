const {looseIdenticalUtil} = require('../utils/loose-identical-util.js');
const {seqUtil} = require('../utils/seq-util.js');
const {genIdUtil} = require('../utils/gen-id-util.js');

class PagingService {
  constructor(component) {
    this.component = component;
    this.stateField = `pagingServiceData${genIdUtil.genId()}`;
    this.component.state = this.component.state || {};
    this.component.state[this.stateField] = {
      pageSize: 10,
      pageNumber: 1,
      totalItems: 1,
    };
  }

  getPageSize() {
    return this.component.state[this.stateField].pageSize;
  }

  getPageNumber() {
    return this.component.state[this.stateField].pageNumber;
  }

  getTotalItems() {
    return this.component.state[this.stateField].totalItems;
  }

  setPageSize(pageSize) {
    this.component.setState((prevState) => ({
      [this.stateField]: {...prevState[this.stateField], pageSize: pageSize},
    }));
  }

  setPageNumber(pageNumber) {
    this.component.setState((prevState) => ({
      [this.stateField]: {...prevState[this.stateField], pageNumber: pageNumber},
    }));
  }

  setTotalItems(totalItems) {
    this.component.setState((prevState) => ({
      [this.stateField]: {...prevState[this.stateField], totalItems: totalItems},
    }));
  }

  makePagingButtons() {
    const {pageSize, pageNumber, totalItems} = this.component.state[this.stateField];
    if (pageSize > 0 && pageNumber > 0 && totalItems > 0) {
      const totalPage = Math.ceil(totalItems / pageSize);
      const originSeq = seqUtil.seq(0, totalPage);
      for (let i = 2; i < pageNumber - 3; i += 1) {
        originSeq[i] = null;
      }
      for (let i = pageNumber + 4; i < totalPage; i += 1) {
        originSeq[i] = null;
      }
      const crackedSeq = originSeq.filter((x) => !!x);
      const buttons = [1];
      for (let i = 1; i < crackedSeq.length; i += 1) {
        if (crackedSeq[i] - 1 === crackedSeq[i - 1]) {
          buttons.push(crackedSeq[i]);
        } else {
          buttons.push(null);
          buttons.push(crackedSeq[i]);
        }
      }
      return buttons;
    }
    return [1];
  }

  isPageSizeChanged(prevState, thisState) {
    return !looseIdenticalUtil.looseIdentical(
      prevState[this.stateField].pageSize,
      thisState[this.stateField].pageSize,
    );
  }

  isPageNumberChanged(prevState, thisState) {
    return !looseIdenticalUtil.looseIdentical(
      prevState[this.stateField].pageNumber,
      thisState[this.stateField].pageNumber,
    );
  }

  isTotalItemsChanged(prevState, thisState) {
    return !looseIdenticalUtil.looseIdentical(
      prevState[this.stateField].totalItems,
      thisState[this.stateField].totalItems,
    );
  }
}

module.exports = {PagingService};
