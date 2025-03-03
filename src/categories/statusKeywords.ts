import { CategoriesEnum } from '../utility/enums.js';
import { category, keyword } from '../utility/types.js';

export const statusKeywords = {
  danger_zone: `$${CategoriesEnum.Status}#danger_zone$`,
  down_and_out: `$${CategoriesEnum.Status}#down_and_out$`,
  engaged: `$${CategoriesEnum.Status}#engaged$`,
  exposed: `$${CategoriesEnum.Status}#exposed$`,
  hidden: `$${CategoriesEnum.Status}#hidden$`,
  invisible: `$${CategoriesEnum.Status}#invisible$`,
  prone: `$${CategoriesEnum.Status}#prone$`,
  shut_down: `$${CategoriesEnum.Status}#shut_down$`,
};

export interface status extends category {
  keywords: {
    danger_zone: keyword;
    down_and_out: keyword;
    engaged: keyword;
    exposed: keyword;
    hidden: keyword;
    invisible: keyword;
    prone: keyword;
    shut_down: keyword;
  };
}
