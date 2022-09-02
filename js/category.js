const loadData = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => viewData(data.data.news_category))
    .catch(error => console.log(error))
}

const viewData = categoryData => {
    const categoryDisplay = document.getElementById('category');
    const category =[];
    categoryData.forEach(data => {
        const{category_name} = data;                    
            category.push(category_name);
    } )
    const sortCategory = category.sort()
    sortCategory.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a class="hover:text-blue-600 cursor-pointer p-5  text-center">${item}</a>
        `;
        categoryDisplay.appendChild(div);
    })

}
loadData()