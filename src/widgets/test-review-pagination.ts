import reviewHandler from 'utils/reviewHandler.js'
import {dom} from '../utils/index.js'
import renderQuestion from './render-question.js'

export const Paginate = (totalNumber: number, arr: Question[], noOfQuestions: number, handler: reviewHandler, currentQuestion? : number) => {

  // use the currentQuestion when next or prev btn is clicked
  let currentPage = currentQuestion || 1
  console.log(currentPage)

  const renderPaginationBtns = () => {
    const paginationContainer = dom('#pagination') as HTMLElement
    paginationContainer.innerHTML = ''

    for (let i = 1; i <= totalNumber; i++){
      const paginationBtn = document.createElement('button') as HTMLButtonElement
      paginationBtn.textContent = `${i}`
      paginationBtn.classList.add('pagination-btn')

      if (i === currentPage) paginationBtn.classList.add('active')

      paginationBtn.onclick = () => {
        currentPage = i;
        renderPaginationBtns()

        renderQuestion("Test Review", i - 1, arr, noOfQuestions, handler)
      }

      // append button
      paginationContainer.appendChild(paginationBtn)
    }
  }

  renderPaginationBtns()
}

export const scrollPagination = (amount: number) => {
  const wrapper = dom('#paginationWrapper') as HTMLDivElement

  wrapper.scrollBy({
    left: amount,
    behavior: "smooth"
  })
}