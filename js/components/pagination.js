  const totalPages = 20;
  let currentPage = 1;

  function renderPagination() {
    const container = document.getElementById("pagination");
    container.innerHTML = ""; // Clear existing

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      btn.className = "pagination-btn" + (i === currentPage ? " active" : "");
      btn.onclick = () => {
        currentPage = i;
        renderPagination();
      };
      container.appendChild(btn);
    }
  }

  function scrollPagination(amount) {
    const wrapper = document.getElementById("paginationWrapper");
    wrapper.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  }

  renderPagination();