/// <reference path="jsfl/jsfl.d.ts" />

/**
 * 装箱接口
 */
interface IBlockPacker {

    /**
     * 图片间隔
     * 
     * @type {number}
     * @memberOf IBlockPacker
     */
    gap: number;

    /**
     * 是否自行对块进行排序  
     * 如果自行排序，则装箱时不会调用sort中的方法将block顺序打乱
     * 
     * @type {boolean}
     * @memberOf IBlockPacker
     */
    selfSorting?: boolean;

    /**
     * 
     * 如果是需要初始固定一个宽度的装箱处理器，装箱时，设置宽度
     * 固定高度或者宽度没有区别
     */
    setWidth?: (w?: number) => void;

    /**
     * 
     * 处理箱子数据，对blocks进行重新排序，调整block的坐标信息
     * @param {IBlock[]} blocks 
     * @return {IBlock[]} 结果集
     */
    fit(blocks: IBlock[]): IBlock[];
}

/**
 * 
 * 计算后的结果
 * @interface IFit
 */
interface IFit {
    x: number;
    y: number;
}

/**
 * 
 * 准备被处理的方块
 * @interface IBlock
 */
interface IBlock {
    w: number;
    h: number;
    getArea(): number;
    fit?: IFit;
    clone(): IBlock;
}

interface GrowingPacker extends IBlockPacker { }

interface GrowingPackerConstructor {
    new (): GrowingPacker;
}

/**
 * https://raw.githubusercontent.com/jakesgordon/bin-packing/master/js/packer.growing.js
 * 装箱算法
 */
declare var GrowingPacker: GrowingPackerConstructor;


/**
 *  扩展FlashItem
 */
interface FlashItem {
    /**
     * 增加一个索引项
     */
    $idx: number;
    /**
     * 增加一个类型项
     */
    $key: number;

    /**
     * 是否做过Scale9检查
     * 
     * @type {boolean}
     * @memberOf FlashItem
     */
    $scale9Checked: boolean;

    /**
     * scale9图层
     * 
     * @type {FlashLayer}
     * @memberOf FlashItem
     */
    $scale9Layer: FlashLayer;
}

/**
 * 当前文档
 */
declare var dom: FlashDocument;

/**
 * 当前库
 */
declare var lib: FlashLibrary;

/**
 * Main.jsfl所在的路径/工作目录
 */
declare const cwd: string;

/**
 * 皮肤输出路径
 */
declare const outputBase: string;

/**
 * 当前处理的fla的名字
 */
declare const flaname: string;

/**
 * 默认字体
 */
declare const DefaultFonts: string;
/**
 * 导出的数据JSON文件名称
 */
declare const DATA_FILE: string;

/**
 * 导出的装箱后的纹理名称
 */
declare const PNG_FILE: string;

/**
 * 导出的装箱的JPG名称
 */
declare const JPG_FILE: string;

/**
 * 是否导出面板数据
 */
declare const ExportPanelData: boolean;

/**
 * 最终数据和纹理输出的目录
 * outputBase + flaname + "/"
 */
declare const folder: string;

/**
 * 代码生成时，使用的模块名称的前缀
 */
declare const moduleName: string;

/**
 * 图片间隔
 * 默认使用1像素
 */
declare const ImageGap: number;

/**
 * 代码输出根目录
 */
declare const classRoot: string;
interface XML {

}

interface XMLContrustor {
    (xml: string): any;
}

declare const XML: XMLContrustor;


/**
 * 尺寸数据
 * 
 * @interface SizeData
 */
interface SizeData extends Array<number> {
    /**
     * x坐标
     * 
     * @type {number}
     * @memberOf BaseData
     */
    0: number;
    /**
     * y坐标
     * 
     * @type {number}
     * @memberOf BaseData
     */
    1: number;
    /**
     * width
     * 
     * @type {number}
     * @memberOf BaseData
     */
    2: number;
    /**
     * height
     * 
     * @type {number}
     * @memberOf BaseData
     */
    3: number;
}

/**
 * 组件数据
 * 
 * @interface ComponentData
 */
interface ComponentData extends Array<any> {
    /**
     * 导出类型
     * 
     * @type {ExportType}
     * @memberOf ComponentData
     */
    0: ExportType;

    /**
     * 基础数据
     * 
     * @type {BaseData}
     * @memberOf ComponentData
     */
    1: BaseData | 0;

    /**
     * 组件数据
     * 
     * @type {any}
     * @memberOf ComponentData
     */
    2: any;

    /**
     * 是否引用lib
     * 如果没有此值或者0，则使用当前key  
     * 1 使用 lib
     * 其他字符串，则为 suiData的key
     * @type {1|string}
     * @memberOf ComponentData
     */
    3?: 0 | 1 | string;
}

/**
 * 基础数据
 * 
 * @interface BaseData
 */
interface BaseData extends Array<any> {
    /**
     * 控件名称
     * 如果是字符串则为控件名字
     * 如果为 0 用于占位，减少JSON字符串输出
     * @type {string | 0}
     * @memberOf BaseData
     */
    0: string | 0;
    /**
     * x坐标
     * 
     * @type {number}
     * @memberOf BaseData
     */
    1: number;
    /**
     * y坐标
     * 
     * @type {number}
     * @memberOf BaseData
     */
    2: number;
    /**
     * width
     * 
     * @type {number}
     * @memberOf BaseData
     */
    3: number;
    /**
     * height
     * 
     * @type {number}
     * @memberOf BaseData
     */
    4: number;
    /**
     * 旋转角度/或者matrix的[a,b,c,d]四个值组成的数组
     * 
     * @type {number}
     * @memberOf BaseData
     */
    5: number | Array<number>;
}