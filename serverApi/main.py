from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
   "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/api/flowers")
async def root():
    return {"flowers": [
    {"id":1,
        "title":"roza",
        "composition":"Розы, эустома листья дуба,эвкалипт",
        "description" : "Круглый букет, выполненный в персиково-белой гамме из пионовидных роз, нежных ранункулюсов, кустовых голландских роз. Окунитесь в теплое настроение лета!",
        "important": "Создавая букеты и композиции, мы не копируем их, а собираем похожий по цветовой гамме, настроению и максимально повторяя состав учитывая сезонность цветка",
        "imgSrc": "https://i.ibb.co/mGskFfW/0-02-04-db6ed6b8ff649f70cade54585032c838e2859129b78d16ebdac4f300e811fe8d-df1ed6d4.jpg",
        "price": 1300},
    {
    "id":2,
    "title":"roza",
    "description":"Яркая композиция в маленькой коробке ROSSE. Чудесный подарок для любого повода. В состав композиции входит роза, гвоздика, эустома, гербера и декоративная зелень. Примерный диаметр 25-30 см.",
    "imgSrc": "https://i.ibb.co/5vfNbfm/0-02-04-b306e69f179795dd8983b9ab7a42165487a07349c490c0b42d69cc373babe22f-89bd2f60.jpg",
    "price": 1300
    },
    {
    "id":3,
    "title":"roza",
    "description":"Сборный букет из тюльпанов, гиацинтов, эустомы и декоративной зелени станет приятным подарком к любому поводу. Примерный диаметр букета 30см.",
    "imgSrc": "https://i.ibb.co/vcrzTZJ/viber-2021-09-04-15-37-54-035.jpg",
    "price": 1300
    },
    {
    "id":4,
    "title":"roza",
    "description":"Букет в кремовых тонах из гербер, роз, эустомы, хризантемы и декоративной зелени словно пронизан нежностью и романтическим настроением. Он станет чудесным подарком, который поможет поднять настроение в любой день. Примерный диаметр букета 30  см.",
    "imgSrc": "https://i.ibb.co/BLYfZ8X/viber-2021-09-04-15-37-02-953.jpg",
    "price": 1300
    },
    {
    "id":5,
    "title":"roza",
    "description":"Романтический букет несет в себе нежность, легкость, хорошее настроение и положительные эмоции. В состав букета входит эустома, роза, гиацинт, хиперикум и декоративная зелень.Такое сочетание цветов сделает подарок незабываемым. Примерный диаметр 50 см.",
    "imgSrc": "https://i.ibb.co/njLHSpy/viber-2021-09-04-15-37-02-858.jpg",
    "price": 1300
    },
    {
    "id":6,
    "title":"roza",
    "description":"",
    "imgSrc": "https://i.ibb.co/5Fc7K6v/viber-2021-09-04-15-37-02-767.jpg",
    "price": 1300
    },
    {
    "id":7,
    "title":"roza",
    "description":"",
    "imgSrc": "https://i.ibb.co/mBCXKh3/viber-2021-09-04-15-37-02-676.jpg",
    "price": 1300
    },
    {
    "id":8,
    "title":"roza",
    "description":"",
    "imgSrc": "https://i.ibb.co/gWGHb5t/viber-2021-09-04-15-36-34-773.jpg",
    "price": 1300
    }]}

@app.get("/api/flowers/{id}")
async def read_item(id):
    flowers = [
        {
            "id":1,
            "title":"roza",
            "composition":"розы, эустома листья дуба,эвкалипт",
            "important": "Создавая букеты и композиции, мы не копируем их, а собираем похожий по цветовой гамме, настроению и максимально повторяя состав учитывая сезонность цветка",
            "imgSrc": "https://i.ibb.co/mGskFfW/0-02-04-db6ed6b8ff649f70cade54585032c838e2859129b78d16ebdac4f300e811fe8d-df1ed6d4.jpg",
            "price": 1300
        },
        {
            "id":2,
            "title":"roza",
            "description":"",
            "imgSrc": "https://i.ibb.co/5vfNbfm/0-02-04-b306e69f179795dd8983b9ab7a42165487a07349c490c0b42d69cc373babe22f-89bd2f60.jpg",
            "price": 1300
        },
        {
            "id":3,
            "title":"roza",
            "description":"",
            "imgSrc": "https://i.ibb.co/vcrzTZJ/viber-2021-09-04-15-37-54-035.jpg",
            "price": 1300
        },
        {
            "id":4,
            "title":"roza",
            "description":"",
            "imgSrc": "https://i.ibb.co/BLYfZ8X/viber-2021-09-04-15-37-02-953.jpg",
            "price": 1300
        },
        {
            "id":5,
            "title":"roza",
            "description":"",
            "imgSrc": "https://i.ibb.co/njLHSpy/viber-2021-09-04-15-37-02-858.jpg",
            "price": 130
        },
        {
            "id":6,
            "title":"roza",
            "description":"",
            "imgSrc": "https://i.ibb.co/5Fc7K6v/viber-2021-09-04-15-37-02-767.jpg",
            "price": 1300
        },
        {
            "id":7,
            "title":"roza",
            "description":"",
            "imgSrc": "https://i.ibb.co/mBCXKh3/viber-2021-09-04-15-37-02-676.jpg",
            "price": 1300
        },
        {
            "id":8,
            "title":"roza",
            "description":"",
            "imgSrc": "https://i.ibb.co/gWGHb5t/viber-2021-09-04-15-36-34-773.jpg",
            "price": 1300
        }
    ]

    return [item for item in flowers if item["id"] == int(id) ][0]

@app.get("/flowers/list/")
async def read_list(skip: int = 0, limit: int = 10):
    return {"skip": skip, "limit": limit}
