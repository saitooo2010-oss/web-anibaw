import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Hell_Paradise from '../images/hellparadise.avif';
import Attack_Titans from '../images/attacktitan.avif';
import Berserk from '../images/berserk.avif';
import Bleach from '../images/bleach.avif';
import Van_Pis from '../images/vanpis.avif';
import Vanpanchmen from '../images/vanpanchmen.avif';
import Volleyball from '../images/volleyball.avif';
import Gachiacuta from '../images/gachiacuta.avif';
import DanDadan from '../images/dandadan.avif';
import Doctor_Stone from '../images/doctorstone.avif';
import Dragon_Ball from '../images/dragonball.avif';
import Evangelion from '../images/evangelion.avif';
import Star_Child from '../images/starchild.avif';
import Demon_Slayer from '../images/demonslayer.avif';
import Jujutsu_Kaisen from '../images/jujutsukaisen.avif';
import Magic_and_Muscle from '../images/magicandmuscle.avif';
import Mob_Psycho_100 from '../images/mobpsycho100.avif';
import My_Hero_Academia from '../images/myheroacademia.avif';
import Naruto from '../images/naruto.avif';
import Solo_Leveling from '../images/sololeveling.avif';
import Pokemon from '../images/pokemon.avif';
import Re_Zero from '../images/rezero.avif';
import Reincarnation_of_the_Wealthy from '../images/reincarnationofthewealthy.avif';
import Vinland_Saga from '../images/vinlandsaga.avif';
import Spy_Family from '../images/spyfamily.avif';
import Seven_Sins from '../images/sevensins.avif';
import Blue_Lock from '../images/bluelock.avif';
import Your_Name from '../images/yourname.avif';
import Death_Note from '../images/deathnote.avif';
import Tokyo_Revengers from '../images/tokyorevengers.avif';
import Tokyo_Ghoul from '../images/tokyoghoul.avif';
import Spirited_Away from '../images/spiritedaway.avif';
import Hunter_x_Hunter from '../images/hunterxhunter.avif';
import Howl_Moving_Castle from '../images/howlmovingcastle.avif';
import Chainsaw_Man from '../images/chainsawman.avif';

const AnimeSlider = () => {
    const slides = [
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
        }
    ];

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={0} 
            centeredSlides={false} 
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="anime-swiper"
            breakpoints={{
                640: { 
                    slidesPerView: 2,
                    spaceBetween: 0 
                },
                768: { 
                    slidesPerView: 3,
                    spaceBetween: 0 
                },
                1024: { 
                    slidesPerView: 4,
                    spaceBetween: 0 
                },
                1280: { 
                    slidesPerView: 5,
                    spaceBetween: 0 
                }
            }}
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div className="anime-slide">
                        <img src={slide.image} alt={slide.title} />
                        <div className="slide-overlay">
                            <h3 className="slide-title">{slide.title}</h3>
                            <div className="slide-rating">★ {slide.rating}</div>
                            <div className="slide-tags">
                                {slide.tags.map((tag, index) => (
                                    <span key={index} className="slide-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default AnimeSlider;