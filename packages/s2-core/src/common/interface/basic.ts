import type { FederatedPointerEvent as Event, PointLike } from '@antv/g';
import type { DataCell, MergedCell, TableDataCell } from '../../cell';
import type {
  CustomTreeNode,
  Data,
  IconPosition,
  RawData,
  ResizeInfo,
  SimpleData,
} from '../../common/interface';
import type { FrameConfig } from '../../common/interface/frame';
import type { Query } from '../../data-set';
import type { CellData } from '../../data-set/cell-data';
import type { BaseHeaderConfig, CornerHeader, Frame } from '../../facet/header';
import type { Node } from '../../facet/layout/node';
import type { SpreadSheet } from '../../sheet-type';
import type { CellType } from '../constant';
import type { S2CellType } from './interaction';
import type { DataItem } from './s2DataConfig';

export type { GetCellMeta, LayoutResult } from './facet';

/**
 * 第二个参数在以下情况会传入：
 * 1. data cell 格式化
 * 2. copy/export
 * 3. tooltip, 且仅在选择多个单元格时，data 类型为数组
 */
export type Formatter = (
  value: DataItem,
  data?: DataItem | ViewMetaData | ViewMetaData[],
  meta?: Node | ViewMeta | null | undefined,
) => SimpleData;

export interface FormatResult {
  formattedValue: SimpleData;
  value: DataItem;
}

export type SortMethod = 'ASC' | 'DESC' | 'NONE' | 'asc' | 'desc' | 'none';

export enum CellBorderPosition {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

/**
 * 类似 background-clip 属性: https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip
 * 分为三种类型：
 * borderBox: 整个 cell 的范围
 * paddingBox: cell 去除 border 的范围
 * contentBox: cell 去除 (border + padding) 的范围
 * -------------------------------
 * |b|           padding         |
 * |o|  |---------------------|  |
 * |r|  |                     |  |
 * |d|  |                     |  |
 * |e|  |---------------------|  |
 * |r|           padding         |
 * -------------------------------
 * -------border-bottom-----------
 * -------------------------------
 */
export enum CellClipBox {
  BORDER_BOX = 'borderBox',
  PADDING_BOX = 'paddingBox',
  CONTENT_BOX = 'contentBox',
}

export interface Meta {
  /**
   * 字段名
   * @example
      1. 'city'
      2. ['city', 'type']
      3. /^city/
   */
  field?: string | string[] | RegExp;

  /**
   * 字段名称
   */
  name?: string;

  /**
   * 字段描述
   */
  description?: string;

  /**
   * 格式化
   * 数值字段：一般用于格式化数字单位
   * 文本字段：一般用于做字段枚举值的别名
   * @see https://s2.antv.antgroup.com/manual/basic/formatter
   */
  formatter?: Formatter;
}

export type CustomHeaderField = CustomTreeNode | string;

export type CustomHeaderFields = CustomHeaderField[];

export interface BaseFields {
  /** 行头字段 */
  rows?: CustomHeaderFields;
  /** 列头字段 */
  columns?: CustomHeaderFields;
  /** 数值字段 */
  values?: string[];
  /** 数值是否置于列头 (透视表有效) */
  valueInCols?: boolean;
}

export interface Fields extends BaseFields {
  /**
   * 自定义指标维度在行列头中的层级顺序 （即 `values` 的 顺序，从 `0` 开始
   */
  customValueOrder?: number | null;
}

export enum Aggregation {
  SUM = 'SUM',
  MIN = 'MIN',
  MAX = 'MAX',
  AVG = 'AVG',
}

export interface CalcTotals {
  /**
   * 聚合方式
   */
  aggregation?: `${Aggregation}`;

  /**
   * 自定义计算汇总
   * @see https://s2.antv.antgroup.com/examples/analysis/totals/#custom
   */
  calcFunc?: (
    query: Query,
    data: CellData[],
    spreadsheet: SpreadSheet,
  ) => number;
}

export interface Total {
  /**
   * 是否显示总计
   */
  showGrandTotals?: boolean;

  /**
   * 是否显示小计
   */
  showSubTotals?:
    | boolean
    | {
        /** 当子维度个数 <=1 时，仍然展示小计：默认 true */
        always: boolean;
      };

  /**
   * 自定义计算总计
   */
  calcGrandTotals?: CalcTotals;

  /**
   * 自定义计算小计
   */
  calcSubTotals?: CalcTotals;

  /**
   * 小计的汇总维度
   * @example subTotalsDimensions: ['province']
   */
  subTotalsDimensions?: string[];

  /**
   * 总计分组
   * @example grandTotalsGroupDimensions: ['city']
   */
  grandTotalsGroupDimensions?: string[];

  /**
   * 小计分组
   * @example subTotalsGroupDimensions: ['city']
   */
  subTotalsGroupDimensions?: string[];

  /**
   * 总计布局位置，默认是下或右
   */
  reverseGrandTotalsLayout?: boolean;

  /**
   * 小计布局位置，默认是下或右
   */
  reverseSubTotalsLayout?: boolean;

  /**
   * 总计展示名
   * @default "总计"
   */
  grandTotalsLabel?: string;

  /**
   * 小计展示名
   * @default "小计"
   */
  subTotalsLabel?: string;
}

export interface Totals {
  row?: Total;
  col?: Total;
}

export interface Sort {
  /** 字段 id */
  sortFieldId: string;

  /** 排序方式 */
  sortMethod?: SortMethod;

  /** 自定义排序 */
  sortBy?: string[];

  /** 按照数值字段排序 */
  sortByMeasure?: string;

  /** 筛选条件，缩小排序范围 */
  query?: Query;

  /** 组内排序用来显示icon */
  type?: string;
}

export interface SortFuncParam extends Sort {
  data: Array<string | Record<string, any>> | undefined;
}

export interface SortParam extends Sort {
  /** 自定义排序 */
  sortFunc?: (param: SortFuncParam) => Array<string | Record<string, any>>;
}

export interface FilterParam {
  filterKey: string;
  filteredValues?: unknown[];
  customFilter?: (row: Query) => boolean;
}

export type SortParams = SortParam[];

export interface Pagination {
  /** 每页数量 */
  pageSize: number;
  /** 当前页 (从 1 开始) */
  current: number;
  /** 数据总条数 */
  total?: number;
}

export interface CustomSVGIcon {
  /**
   * icon 名称
   */
  name: string;

  /**
   * @example 1、base64
   * @example 2. svg本地文件 (兼容老方式, 可以改颜色)

   import Icon from 'path/to/xxx.svg'

   => { name: 'iconA', src: Icon }
   => { name: 'iconB', src: '<svg>...</svg>' }

   * @example 3. 线上支持的图片地址 (不支持改颜色)
    带后缀: https://gw.alipayobjects.com/zos/antfincdn/gu1Fsz3fw0/filter%26sort_filter.svg
    无后缀: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*5nsESLuvc_EAAAAAAAAAAAAADmJ7AQ/original
   */
  src: string;
}

export interface HeaderIconClickParams {
  name: string;
  meta: Node;
  event?: Event;
}

export type HeaderActionIconProps = HeaderIconClickParams;

export interface HeaderIconHoverParams extends HeaderIconClickParams {
  hovering: boolean;
}

export interface HeaderActionIconOptions extends HeaderActionIconBaseOptions {
  fill?: string | null;
  name: string;
  x: number;
  y: number;
  isSortIcon?: boolean;
}

export type HeaderActionNameOptions = HeaderActionIconBaseOptions & {
  /**
   * icon 颜色配置
   * @description 优先级: 单个 icon > 主题 icon 配置 > 文本颜色，null 则使用图标原有颜色
   */
  fill?: string | null;

  /**
   * icon 名称
   */
  name: string;

  /**
   * icon 相对文本的位置
   * 可选: 'left' | 'right'
   */
  position?: IconPosition;

  /**
   * 是否是条件格式的 icon
   */
  isConditionIcon?: boolean;
};

export type HeaderActionName =
  | string
  | Omit<HeaderActionNameOptions, 'isConditionIcon'>;

export interface HeaderActionIconBaseOptions {
  /**
   * 是否默认隐藏， 开启后 hover 后才显示,  关闭后则始终显示, 可根据当前单元格信息动态判断
   * @example defaultHide: (meta, iconName) => meta.id === 'xxx'
   * @default false
   */
  defaultHide?: boolean | ((meta: Node, iconName: string) => boolean);

  /**
   * 是否展示, 可根据当前单元格信息动态判断
   * @example displayCondition: (meta, iconName) => !meta.isTotals
   */
  displayCondition?: (meta: Node, iconName: string) => boolean;

  /**
   * 点击回调函数
   */
  onClick?: (headerIconClickParams: HeaderIconClickParams) => void;

  /**
   * 悬停回调函数
   */
  onHover?: (headerIconHoverParams: HeaderIconHoverParams) => void;
}

export interface HeaderActionIcon extends HeaderActionIconBaseOptions {
  /**
   * 内置 icon 或通过 @customSVGIcons 自定义的 icon 名称
   * 如果是 string[], 则默认 icon 位置为右侧
   * @see https://s2.antv.antgroup.com/manual/advanced/custom/custom-icon
   * @example icons: ['iconNameA', 'iconNameB']
   * @example icons: [{ name: 'iconNameA', position: "left", fill: "red" }]
   */
  icons: HeaderActionName[];

  /**
   * 所属的 cell 类型, 即当前 icon 展示在哪种类型单元格中
   * @example belongsCell: 'rowCell'
   */
  belongsCell: Exclude<
    `${CellType}`,
    'dataCell' | 'mergedCell' | 'seriesNumberCell'
  >;
}

export interface InternalFullyHeaderActionIcon extends HeaderActionIcon {
  icons: HeaderActionNameOptions[];
  isSortIcon?: boolean;
}

export type CellCallbackParams<T extends BaseHeaderConfig = BaseHeaderConfig> =
  [node: Node, spreadsheet: SpreadSheet, headerConfig: T];

export type CellCallback<
  T extends Partial<BaseHeaderConfig>,
  K extends S2CellType,
> = (node: Node, spreadsheet: SpreadSheet, headerConfig: T) => K;

export type DataCellCallback = (
  viewMeta: ViewMeta,
  spreadsheet: SpreadSheet,
) => DataCell | TableDataCell;

export type MergedCellCallback = (
  spreadsheet: SpreadSheet,
  cells: DataCell[],
  meta?: ViewMeta,
) => MergedCell;

export type FrameCallback = (cfg: FrameConfig) => Frame;

export type CornerHeaderCallback = (
  cornerHeader: CornerHeader,
  spreadsheet: SpreadSheet,
  ...restOptions: unknown[]
) => void;

export interface MergedCellInfo {
  colIndex?: number;
  rowIndex?: number;
  showText?: boolean;
}

export type TempMergedCell = {
  cells: DataCell[];
  viewMeta: ViewMeta;
};

export type ViewMetaData = Data | CellData;

export interface ViewMeta {
  /** 表格实例 */
  spreadsheet: SpreadSheet;

  /** 数据唯一标识 */
  id: string;

  /** x 坐标 */
  x: number;

  /** y 坐标 */
  y: number;

  /** 单元格宽度 */
  width: number;

  /** 单元格高度 */
  height: number;

  /** 单元格数据 */
  data: ViewMetaData | undefined;

  /** 行索引 */
  rowIndex: number;

  /** 列索引 */
  colIndex: number;

  /** 数值字段, 对应 s2DataConfig.fields */
  valueField: string;

  /** 数值 */
  fieldValue: DataItem;

  /** 是否是汇总字段 */
  isTotals?: boolean;

  /** 行查询条件 */
  rowQuery?: Query;

  /** 列查询条件 */
  colQuery?: Query;

  /** 行 id */
  rowId?: string;

  /** 列 id */
  colId?: string;

  /** 查询条件 */
  query?: Query;

  /** 叶子节点 */
  isLeaf?: boolean;

  /** 是否是浅渲染 */
  shallowRender?: boolean;

  /** 其他字段 */
  [key: string]: unknown;
}

export type ViewMetaIndexType = keyof Pick<ViewMeta, 'colIndex' | 'rowIndex'>;

export interface CellAppendInfo<T = Node>
  extends Partial<Omit<ResizeInfo, 'meta'>> {
  isLinkFieldText?: boolean;
  meta?: T;
}

export type S2MountContainer = string | Element;

export interface OriginalEvent extends Event {
  layerX: number;
  layerY: number;
}

// 用于和下钻组件进行交互联动
export interface PartDrillDownDataCache {
  // 执行下钻的行头id
  rowId: string;
  // 下钻的行头level
  drillLevel: number;
  drillField: string;
  // 下钻的数据
  drillData: RawData[];
}

export interface PartDrillDownFieldInLevel {
  // 下钻的维度
  drillField: string;
  // 下钻的层级
  drillLevel: number;
}

export interface TableSortParam extends SortParam {
  sortKey: string;
}

export interface GridInfo {
  cols: number[];
  rows: number[];
}

export interface Point extends PointLike {}

export type RowData = Data | CellData[];
