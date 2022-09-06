import * as flsFunctions from "./modules/functionsWebP.js";
import { selectCustom } from "./selectCustom.js";
import { burger } from "./burger.js";
import { introSwiper } from "./introSwiper.js";
import { specialOffersSwiper } from "./specialOffersSwiper.js";
import { specialOffersOpen } from "./specialOffersOpen.js";
import { topCategorySwiper } from "./topCategorySwiper.js";
import { catalogPagination } from "./catalogPagination.js";
import { catalogNouislider } from "./catalogNouislider.js";

flsFunctions.isWeb();
selectCustom();
burger();
catalogPagination();
introSwiper();
specialOffersSwiper();
specialOffersOpen();
topCategorySwiper();
catalogNouislider();
