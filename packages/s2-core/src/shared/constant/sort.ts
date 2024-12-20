import { i18n, S2_PREFIX_CLS } from '../../common';

export const getSortMethod = () => [
  {
    name: i18n('升序'),
    value: 'ASC',
  },
  {
    name: i18n('降序'),
    value: 'DESC',
  },
];

export const getSortRuleOptions = () => [
  {
    label: i18n('首字母'),
    value: 'sortMethod',
  },
  {
    label: i18n('手动排序'),
    value: 'sortBy',
  },
  {
    label: i18n('其他字段'),
    value: 'sortByMeasure',
    children: [],
  },
];

export const ADVANCED_SORT_PRE_CLS = `${S2_PREFIX_CLS}-advanced-sort`;
