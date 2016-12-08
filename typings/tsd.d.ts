/// <reference path="jsfl/jsfl.d.ts" />

/**
 * 装箱接口
 */
interface IBlockPacker {

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
 * 导出的数据JSON文件名称
 */
declare const DATA_FILE: string;

/**
 * 导出的装箱后的纹理名称
 */
declare const PNG_FILE: string;

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
 * 代码输出根目录
 */
declare const classRoot: string;