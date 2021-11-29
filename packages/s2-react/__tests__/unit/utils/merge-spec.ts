import { DEFAULT_STYLE } from '@antv/s2';
import { getSafetyOptions } from '@/utils/merge';

describe('merge test', () => {
  test('should get safety options', () => {
    const options = getSafetyOptions(null);
    Reflect.deleteProperty(options.tooltip, 'renderTooltip');

    expect(options).toStrictEqual({
      width: 600,
      height: 480,
      debug: false,
      hierarchyType: 'grid',
      conditions: {},
      totals: {},
      tooltip: {
        showTooltip: true,
        autoAdjustBoundary: 'body',
        operation: {
          hiddenColumns: true,
          trend: false,
          sort: true,
        },
      },
      interaction: {
        linkFields: [],
        hiddenColumnFields: [],
        selectedCellsSpotlight: false,
        hoverHighlight: true,
        scrollSpeedRatio: {
          horizontal: 1,
          vertical: 1,
        },
        autoResetSheetStyle: true,
      },
      frozenRowHeader: true,
      showSeriesNumber: false,
      scrollReachNodeField: {},
      customSVGIcons: [],
      customHeaderCells: null,
      showDefaultHeaderActionIcon: true,
      headerActionIcons: [],
      style: DEFAULT_STYLE,
      frozenRowCount: 0,
      frozenColCount: 0,
      frozenTrailingRowCount: 0,
      frozenTrailingColCount: 0,
      hdAdapter: true,
    });
  });

  test('should get custom options', () => {
    const options = getSafetyOptions({
      tooltip: {
        showTooltip: false,
        operation: {
          sort: false,
        },
      },
    });

    Reflect.deleteProperty(options.tooltip, 'renderTooltip');

    expect(options.tooltip).toStrictEqual({
      showTooltip: false,
      autoAdjustBoundary: 'body',
      operation: {
        hiddenColumns: true,
        trend: false,
        sort: false,
      },
    });
  });
});