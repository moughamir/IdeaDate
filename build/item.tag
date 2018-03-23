<item>
  <article class="item" each={ items }>
    <nav class="item-slid">
      <div class="ico ico-md ico-prev"></div>
      <div class="ico ico-md ico-next"></div>
    </nav>
    <figure class="item-image">
      <div class="mask">
        <svg xmlns="http://www.w3.org/2000/svg" class="like" viewBox="0 0 30 30">
          <path fill="#FFF" fill-rule="evenodd" d="M8.381 1C4.312 1 1 4.31 1 8.38c0 8.74 11.921 18.8 14 20.48 2.079-1.69 14-11.75 14-20.48C29 4.31 25.688 1 21.619 1c-2.774 0-5.021 1.95-6.199 3.77-.184.29-.656.29-.84 0C13.402 2.95 11.155 1 8.381 1zM15 30a.497.497 0 0 1-.307-.1C14.094 29.43 0 18.39 0 8.38 0 3.76 3.76 0 8.381 0 11.248 0 13.599 1.78 15 3.63 16.401 1.78 18.752 0 21.619 0 26.24 0 30 3.76 30 8.38c0 10.01-14.094 21.05-14.693 21.52A.497.497 0 0 1 15 30z"/>
        </svg>
      </div>
      <img src="{ picture }" alt="{ name }">
    </figure>
    <div class="item-info">
      <div class="item-name">{ name } <span class="item-rating"><i class="ico ico-star"></i> { rating }</span></div>
      <div class="item-likes">{ likes } likes</div>

    </div>
  </article>
  <script>
    this.items = [{
        "_id": "5aa97299c34ec7d5203a9740",
        "picture": "assets/items/Asiate.png",
        "name": "Asiate",
        "rating": "4.5",
        "likes": "400k"
      },
      {
        "_id": "5aa97299e2c5526afbd42a0f",
        "picture": "assets/items/BlueHill.png",
        "name": "Blue Hill",
        "rating": "5.5",
        "likes": "900k"
      },
      {
        "_id": "5aa972999f04260b08593628",
        "picture": "assets/items/JeanGeorges.png",
        "name": "Jean Georges",
        "rating": "5.5",
        "likes": "900k"
      },
      {
        "_id": "5aa972998390ef0f1d92db26",
        "picture": "assets/items/Petrossian.png",
        "name": "Petrossian",
        "rating": "4.4",
        "likes": "670"
      },
      {
        "_id": "5aa97299c99d64ec25f73bc5",
        "picture": "assets/items/AbcKitchen.png",
        "name": "ABC Kitchen",
        "rating": "3.5",
        "likes": "100k"
      },
      {
        "_id": "5aa97299a586985f307a6029",
        "picture": "assets/items/OC.png",
        "name": "OC",
        "rating": "4.5",
        "likes": "300k"
      }
    ]
  </script>
</item>
