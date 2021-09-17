from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/flowers")
async def root():
    return {"flowers": [
    {
    "id":1,
    "title":"roza",
    "composition":"Розы, эустома листья дуба,эвкалипт",
    "important": "Создавая букеты и композиции, мы не копируем их, а собираем похожий по цветовой гамме, настроению и максимально повторяя состав учитывая сезонность цветка",
    "imgSrc": "https://i.ibb.co/mGskFfW/0-02-04-db6ed6b8ff649f70cade54585032c838e2859129b78d16ebdac4f300e811fe8d-df1ed6d4.jpg",
    "price": 1300
    },
    {
    "id":2,
    "title":"roza",
    "composition":"Розы, эустома листья дуба,эвкалипт",
    "important": "Создавая букеты и композиции, мы не копируем их, а собираем похожий по цветовой гамме, настроению и максимально повторяя состав учитывая сезонность цветка",
    "imgSrc": "https://i.ibb.co/5vfNbfm/0-02-04-b306e69f179795dd8983b9ab7a42165487a07349c490c0b42d69cc373babe22f-89bd2f60.jpg",
    "price": 1300
    },
    {
    "id":3,
    "title":"roza",
    "composition":"Розы, эустома листья дуба,эвкалипт",
    "important": "Создавая букеты и композиции, мы не копируем их, а собираем похожий по цветовой гамме, настроению и максимально повторяя состав учитывая сезонность цветка",
    "imgSrc": "https://i.ibb.co/vcrzTZJ/viber-2021-09-04-15-37-54-035.jpg",
    "price": 1300
    },
    {
    "id":4,
    "title":"roza",
    "composition":"Розы, эустома листья дуба,эвкалипт",
    "important": "Создавая букеты и композиции, мы не копируем их, а собираем похожий по цветовой гамме, настроению и максимально повторяя состав учитывая сезонность цветка",
    "imgSrc": "https://i.ibb.co/BLYfZ8X/viber-2021-09-04-15-37-02-953.jpg",
    "price": 1300
    },
    {
    "id":5,
    "title":"roza",
    "composition":"Розы, эустома листья дуба,эвкалипт",
    "important": "Создавая букеты и композиции, мы не копируем их, а собираем похожий по цветовой гамме, настроению и максимально повторяя состав учитывая сезонность цветка",
    "imgSrc": "https://i.ibb.co/njLHSpy/viber-2021-09-04-15-37-02-858.jpg",
    "price": 1300
    },
    {
    "id":6,
    "title":"roza",
    "composition":"Розы, эустома листья дуба,эвкалипт",
    "important": "Создавая букеты и композиции, мы не копируем их, а собираем похожий по цветовой гамме, настроению и максимально повторяя состав учитывая сезонность цветка",
    "imgSrc": "https://i.ibb.co/5Fc7K6v/viber-2021-09-04-15-37-02-767.jpg",
    "price": 1300
    },
    {
    "id":7,
    "title":"roza",
    "composition":"Розы, эустома листья дуба,эвкалипт",
    "important": "Создавая букеты и композиции, мы не копируем их, а собираем похожий по цветовой гамме, настроению и максимально повторяя состав учитывая сезонность цветка",
    "imgSrc": "https://i.ibb.co/mBCXKh3/viber-2021-09-04-15-37-02-676.jpg",
    "price": 1300
    },
    {
    "id":8,
    "title":"roza",
    "composition":"Розы, эустома листья дуба,эвкалипт",
    "important": "Создавая букеты и композиции, мы не копируем их, а собираем похожий по цветовой гамме, настроению и максимально повторяя состав учитывая сезонность цветка",
    "imgSrc": "https://i.ibb.co/gWGHb5t/viber-2021-09-04-15-36-34-773.jpg",
    "price": 1300
    }]}

@app.get("/api/flowers/{item.id}")
async def read_item(item.id):
    return {
                 "id":"id",
                 "title":"title",
                 "composition":"composition",
                 "important": "important",
                 "imgSrc": "imgSrc",
                 "price": "price"
                 }

@app.get("/flowers/list/")
async def read_list(skip: int = 0, limit: int = 10):
    return {"skip": skip, "limit": limit}
