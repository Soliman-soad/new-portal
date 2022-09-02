const loadData = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => viewCategory(data.data.news_category))
    .catch(error => console.log(error))
}

const viewCategory = categoryData => {
    const categoryDisplay = document.getElementById('category');
    console.log(categoryData);
    const category =[];
    categoryData.forEach(data => {
        const{category_name,category_id} = data;                    
        category.push(category_name);        
        const div = document.createElement('div');
        div.innerHTML = `
        <a class="hover:text-blue-600 cursor-pointer p-5 text-center" onclick=loadNews("${category_id}")>${category_name}</a>
        `;
        categoryDisplay.appendChild(div);

    } )
}

const loadNews = (category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url)
    .then(res => res.json())
    .then(data => viewNews(data.data))
    .catch(error => console.log(error))
}

const viewNews = newsData => {
    const newsDisplay = document.getElementById('news');
    newsDisplay.innerHTML ="";
    console.log(newsData);
    newsData.forEach(news => {
        const div = document.createElement('div');
        const {author,details,image_url,_id,title,total_view} = news;
        div.innerHTML =`
        <label
            class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:w-10/12 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto p-5 m-5"         
            for="my-modal"
          >
            <img
              class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="${image_url}"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                ${title}
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                ${details.slice(0,150)? details.slice(0,150)+"..." : details}
              </p>
            </div>
            
          </label>
        `;
        newsDisplay.appendChild(div);
    })
    

}

loadData()