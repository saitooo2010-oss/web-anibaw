import React from 'react';
import "./card.css";
import Hell_Paradise from '../../components/images/hellparadise.avif'
import Attack_Titans from '../../components/images/attacktitan.avif'
import Berserk from '../../components/images/berserk.avif'
import Bleach from '../../components/images/bleach.avif'
import Van_Pis from '../../components/images/vanpis.avif'
import Vanpanchmen from '../../components/images/vanpanchmen.avif'
import Volleyball from '../../components/images/volleyball.avif'
import Gachiacuta from '../../components/images/gachiacuta.avif'
import DanDadan from '../../components/images/dandadan.avif'
import Doctor_Stone from '../../components/images/doctorstone.avif'
import Dragon_Ball from '../../components/images/dragonball.avif'
import Evangelion from '../../components/images/evangelion.avif'
import Star_Child from '../../components/images/starchild.avif'
import Demon_Slayer from '../../components/images/demonslayer.avif'
import Jujutsu_Kaisen from '../../components/images/jujutsukaisen.avif'
import Magic_and_Muscle from '../../components/images/magicandmuscle.avif'
import Mob_Psycho_100 from '../../components/images/mobpsycho100.avif'
import My_Hero_Academia from '../../components/images/myheroacademia.avif'
import Naruto from '../../components/images/naruto.avif'
import Solo_Leveling from '../../components/images/sololeveling.avif'
import Pokemon from '../../components/images/pokemon.avif'
import Re_Zero from '../../components/images/rezero.avif'
import Reincarnation_of_the_Wealthy from '../../components/images/reincarnationofthewealthy.avif'
import Vinland_Saga from '../../components/images/vinlandsaga.avif'
import Spy_Family from '../../components/images/spyfamily.avif'
import Seven_Sins from '../../components/images/sevensins.avif'
import Blue_Lock from '../../components/images/bluelock.avif'
import Your_Name from '../../components/images/yourname.avif'
import Death_Note from '../../components/images/deathnote.avif'
import Tokyo_Revengers from '../../components/images/tokyorevengers.avif'
import Tokyo_Ghoul from '../../components/images/tokyoghoul.avif'
import Spirited_Away from '../../components/images/spiritedaway.avif'
import Hunter_x_Hunter from '../../components/images/hunterxhunter.avif'
import Howl_Moving_Castle from '../../components/images/howlmovingcastle.avif'
import Chainsaw_Man from '../../components/images/chainsawman.avif'

const Card = () => {
    const cards = [
        {
            id: 1,
            title: "Адский Рай",
            image: Hell_Paradise,
            rating: "8.7",
            tags: ["Экшен", "Приключения", "Сёнэн"]
        },
        {
            id: 2,
            title: "Атака Титанов",
            image: Attack_Titans,
            rating: "9.1",
            tags: ["Экшен", "Драма", "Триллер"]
        },
        {
            id: 3,
            title: "Берсерк",
            image: Berserk,
            rating: "9.0",
            tags: ["Сэйнэн", "Фэнтези", "Ужасы"]
        },
        {
            id: 4,
            title: "Блич",
            image: Bleach,
            rating: "8.9",
            tags: ["Экшен", "Сёнэн", "Суперсила"]
        },
        {
            id: 5,
            title: "Ван-Пис",
            image: Van_Pis,
            rating: "8.5",
            tags: ["Приключения", "Комедия", "Сёнэн"]
        },
        {
            id: 6,
            title: "Ванпанчмен",
            image: Vanpanchmen,
            rating: "8.8",
            tags: ["Комедия", "Пародия", "Экшен"]
        },
        {
            id: 7,
            title: "Воллейбол!",
            image: Volleyball,
            rating: "8.4",
            tags: ["Спорт", "Командный", "Драма"]
        },
        {
            id: 8,
            title: "Гачиакута",
            image: Gachiacuta,
            rating: "8.5",
            tags: ["Экшен", "Сёнэн", "Сверхъестественное"]
        },
        {
            id: 9,
            title: "ДанДаДан",
            image: DanDadan,
            rating: "8.6",
            tags: ["Комедия", "Романтика", "Мистика"]
        },
        {
            id: 10,
            title: "Доктор Стоун",
            image: Doctor_Stone,
            rating: "8.7",
            tags: ["Научная фантастика", "Приключения", "Сёнэн"]
        },
        {
            id: 11,
            title: "Драгон Болл",
            image: Dragon_Ball,
            rating: "8.8",
            tags: ["Боевые искусства", "Экшен", "Сёнэн"]
        },
        {
            id: 12,
            title: "Евангелион",
            image: Evangelion,
            rating: "9.0",
            tags: ["Меха", "Психология", "Драма"]
        },
        {
            id: 13,
            title: "Звездное Дитя",
            image: Star_Child,
            rating: "8.9",
            tags: ["Драма", "Детектив", "Шоу-бизнес"]
        },
        {
            id: 14,
            title: "Клинок, рассекающий демонов",
            image: Demon_Slayer,
            rating: "8.8",
            tags: ["Экшен", "Исторический", "Сёнэн"]
        },
        {
            id: 15,
            title: "Магическая битва",
            image: Jujutsu_Kaisen,
            rating: "8.7",
            tags: ["Экшен", "Мистика", "Школа"]
        },
        {
            id: 16,
            title: "Магия и Мускулы",
            image: Magic_and_Muscle,
            rating: "8.7",
            tags: ["Пародия", "Комедия", "Фэнтези"]
        },
        {
            id: 17,
            title: "Моб Психо 100",
            image: Mob_Psycho_100,
            rating: "8.8",
            tags: ["Комедия", "Психология", "Сверхъестественное"]
        },
        {
            id: 18,
            title: "Моя геройская академия",
            image: My_Hero_Academia,
            rating: "8.9",
            tags: ["Супергерои", "Экшен", "Школа"]
        },
        {
            id: 19,
            title: "Наруто",
            image: Naruto,
            rating: "8.5",
            tags: ["Экшен", "Боевые искусства", "Сёнэн"]
        },
        {
            id: 20,
            title: "Поднятие уровня в одиночку",
            image: Solo_Leveling,
            rating: "8.6",
            tags: ["Игры", "Экшен", "Приключения"]
        },
        {
            id: 21,
            title: "Покемон",
            image: Pokemon,
            rating: "8.4",
            tags: ["Приключения", "Детское", "Комедия"]
        },
        {
            id: 22,
            title: "Ре:Зеро. Жизнь с нуля в альтернативном мире",
            image: Re_Zero,
            rating: "8.6",
            tags: ["Исекай", "Драма", "Психология"]
        },
        {
            id: 23,
            title: "Реинкарнация безработного",
            image: Reincarnation_of_the_Wealthy,
            rating: "8.5",
            tags: ["Исекай", "Фэнтези", "Приключения"]
        },
        {
            id: 24,
            title: "Сага о Винланде",
            image: Vinland_Saga,
            rating: "8.8",
            tags: ["Экшен", "Исторический", "Драма"]
        },
        {
            id: 25,
            title: "Семья Шпиона",
            image: Spy_Family,
            rating: "8.7",
            tags: ["Комедия", "Экшен", "Повседневность"]
        },
        {
            id: 26,
            title: "Семь смертных грехов",
            image: Seven_Sins,
            rating: "8.5",
            tags: ["Экшен", "Приключения", "Фэнтези"]
        },
        {
            id: 27,
            title: "Синяя Тюрьма: Blue Lock",
            image: Blue_Lock,
            rating: "8.6",
            tags: ["Спорт", "Триллер", "Сёнэн"]
        },
        {
            id: 28,
            title: "Твое Имя",
            image: Your_Name,
            rating: "8.5",
            tags: ["Романтика", "Драма", "Сверхъестественное"]
        },
        {
            id: 29,
            title: "Тетрадь Смерти",
            image: Death_Note,
            rating: "8.7",
            tags: ["Триллер", "Детектив", "Психология"]
        },
        {
            id: 30,
            title: "Токийские Мстители",
            image: Tokyo_Revengers,
            rating: "8.4",
            tags: ["Драма", "Экшен", "Путешествие во времени"]
        },
        {
            id: 31,
            title: "Токийский Гуль",
            image: Tokyo_Ghoul,
            rating: "8.6",
            tags: ["Ужасы", "Триллер", "Экшен"]
        },
        {
            id: 32,
            title: "Унесенные призраками",
            image: Spirited_Away,
            rating: "8.5",
            tags: ["Сказка", "Приключения", "Фэнтези"]
        },
        {
            id: 33,
            title: "Хантер Х Хантер",
            image: Hunter_x_Hunter,
            rating: "8.5",
            tags: ["Приключения", "Экшен", "Сёнэн"]
        },
        {
            id: 34,
            title: "Ходячий замок",
            image: Howl_Moving_Castle,
            rating: "8.4",
            tags: ["Романтика", "Приключения", "Фэнтези"]
        },
        {
            id: 35,
            title: "Человек-бензопила",
            image: Chainsaw_Man,
            rating: "8.6",
            tags: ["Экшен", "Ужасы", "Тёмное фэнтези"]
        }
    ];

    return (
        <div className="card-container">
            {cards.map((item) => (
                <div key={item.id} className="anime-card">
                    <div className="card-image">
                        <img src={item.image} alt={item.title} loading="lazy" />
                        <div className="card-rating">{item.rating}</div>
                        <div className="card-overlay">
                            <h3 className="card-title-overlay">{item.title}</h3>
                            <div className="card-tags-overlay">
                                {item.tags.map((tag, index) => (
                                    <span key={index} className="tag-overlay">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;