const articleText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eveniet a adipisci provident soluta blanditiis qui nobis, impedit sequi ratione nihil, delectus odio voluptatibus, voluptatem voluptate corporis? Consectetur ad voluptate molestias similique quibusdam eum aspernatur, nesciunt. Consequuntur inventore quo doloribus, labore quidem ullam suscipit iusto placeat explicabo ipsa nesciunt, eligendi dolores fugit corporis dolorem porro iste odit molestiae facere magni necessitatibus quibusdam quia. Laudantium ad natus eveniet, ullam reiciendis, ducimus. Distinctio accusantium repellendus iusto totam, ducimus optio pariatur. Voluptatum velit minima expedita quod pariatur! A aliquam at vitae neque deserunt repudiandae officia numquam tenetur porro laborum voluptates totam, ducimus, doloribus, quasi repellendus reiciendis! Est dolorum adipisci et totam explicabo sapiente ullam recusandae consectetur earum illo nesciunt, amet unde soluta, numquam? Omnis architecto debitis minima, eligendi veniam libero animi alias similique, ab quos excepturi dolores, dicta vero recusandae dolor id repudiandae tempora rem cum at inventore laudantium accusantium vitae nesciunt nam! Magni praesentium cupiditate quam nulla consequatur excepturi architecto quas ducimus fugit neque tempore esse qui, a placeat impedit ullam delectus, fugiat repellendus, autem deserunt. Dolore, quia, minus! Laboriosam autem debitis voluptatum at consequuntur esse commodi, minima, accusamus veniam quas voluptatem iusto nobis aut excepturi mollitia molestias. Vitae deleniti cupiditate vero ratione fugiat suscipit eum in error alias rem. Quisquam veritatis maxime sint nesciunt enim dicta, cumque, necessitatibus provident praesentium ab nemo libero mollitia voluptas adipisci tenetur? Qui possimus at rerum hic eum sunt nesciunt inventore soluta expedita. Voluptates natus, praesentium inventore sint, rerum at in, consequuntur quos veniam sed saepe debitis eos. Et suscipit, asperiores laboriosam, omnis earum officia! Ad dolorem placeat laborum. Soluta amet officia corporis praesentium rem, assumenda eos dolor maxime magni voluptates veniam ipsam natus eveniet officiis debitis reprehenderit fugit dignissimos neque, nam, architecto laudantium adipisci excepturi. Recusandae veritatis, ut beatae cupiditate sunt quia reiciendis repellat! Dolores quidem praesentium, est, officia consequatur voluptatum quibusdam a, quo placeat magnam nobis odit temporibus quaerat, deserunt voluptate eveniet? Sit molestiae, velit quae nesciunt incidunt, magnam! Perferendis exercitationem corporis nulla eligendi, a debitis assumenda repudiandae quisquam, quibusdam accusantium ex cumque maiores id sit laboriosam sed temporibus? Distinctio doloremque molestiae iusto exercitationem quo vel esse nostrum dolores pariatur, perferendis officia inventore nam ipsum repudiandae tempora ab. Ut eum voluptates hic nihil sapiente placeat, quisquam aperiam quod. Nesciunt eos sit nisi, quibusdam eius ea culpa accusantium numquam voluptates recusandae suscipit. Dolore officiis soluta labore, eius aliquam nihil voluptas fuga eum doloribus. Quos expedita temporibus cum repellat ducimus eligendi a veritatis, nulla similique illo eaque pariatur omnis necessitatibus? Itaque deserunt quaerat aliquam sint tenetur tempora reiciendis dignissimos laudantium ratione omnis. Officia itaque excepturi modi quasi consequuntur inventore praesentium libero sit quisquam. In eum, veniam nostrum natus, molestiae ratione animi officia nesciunt tempore vel laborum, ab a minus! Impedit deserunt non beatae voluptatum excepturi consequatur culpa soluta illo, magnam earum rerum cupiditate corrupti recusandae eius quos. Debitis ex ipsam id consequatur consequuntur pariatur aspernatur quisquam veniam quod ratione. Numquam laboriosam, libero architecto autem quo commodi labore, tenetur doloremque ex illum. Alias, perferendis! Repellendus ab eligendi dignissimos, eius sint officia provident, laborum odio blanditiis ad officiis veniam veritatis impedit recusandae nostrum possimus exercitationem sed illo. Officia repudiandae fuga quod aut, eaque error atque ratione omnis, eveniet amet. Minus quos molestias ullam incidunt consequuntur autem quam ipsa, corporis earum aperiam assumenda, ea nulla non praesentium, minima molestiae ipsam est esse vitae voluptates nobis eum, fuga sunt. Facere officia, sapiente doloremque. Veniam consequuntur et rerum veritatis cupiditate odio fuga suscipit dolorum ut iure perspiciatis sapiente eius quaerat at non sunt sed natus temporibus nam sequi, nihil, facilis, tenetur libero explicabo minus. Fuga amet voluptate porro tempore iure quaerat libero rem dolorem doloribus repellat voluptatibus ullam numquam nesciunt ipsum consequatur hic beatae ducimus, culpa, quidem error nisi. Vel asperiores, deserunt aspernatur quasi non similique minima ut porro debitis, excepturi harum est blanditiis. Harum velit dolorem suscipit deserunt quidem, id, at quo sint esse eius in quae placeat recusandae iusto dolor reprehenderit atque voluptatum obcaecati assumenda facilis nam quibusdam magni neque. Suscipit nam rem vero quos rerum reprehenderit quaerat aliquam facere tempore quas neque porro error debitis, quod numquam omnis pariatur qui corporis molestias, placeat aperiam praesentium optio accusantium aliquid! Voluptas perferendis aut a. Dolorum dignissimos ipsam, quod ex adipisci!';

export default function articleDetails() {
  return [
  {
    id: 1,
    category: 'fashion',
    imgCategory: 'fashion',
    coverImage: '/path/to/image',
    title: 'Dark Horse',
    publishDate: '19 Sept',
    lengthInMins: 6,
    readerCount: 20,
    bookmarks: 10,
    articleText: articleText,
    articleAuthor: {
      name: 'akansha redhu',
      subscribers: 19
    }
  },
  {
    id: 2,
    category: 'travel',
    imgCategory: 'nature',
    coverImage: '/path/to/image',
    title: 'Solo Travel Moments that left me scared shitless',
    publishDate: '28 July',
    lengthInMins: 6,
    readerCount: 20,
    bookmarks: 15,
    articleText: articleText,
    articleAuthor: {
      name: 'chandana munipalle',
      subscribers: 29
    }
  },
  {
    id: 3,
    category: 'technology',
    imgCategory: 'technics',
    coverImage: '/path/to/image',
    title: 'How to Write a Twitter Bot in 5 Minutes',
    publishDate: '09 April',
    lengthInMins: 5,
    readerCount: 28,
    bookmarks: 15,
    articleText: articleText,
    articleAuthor: {
      name: 'amit agarwal',
      subscribers: 39
    }
  }
];
}