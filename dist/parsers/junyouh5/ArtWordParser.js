var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ArtWordParser = (function (_super) {
    __extends(ArtWordParser, _super);
    function ArtWordParser() {
        var _this = _super.call(this, 6 /* ArtText */, /^bmd[.](artword)/, null, "sui.ArtWord") || this;
        _this.parseHandler = _this.parse;
        return _this;
    }
    ArtWordParser.prototype.parse = function (checker, item, list, solution) {
        var timeline = item.timeline;
        var layers = timeline.layers;
        var llen = layers.length;
        var data = [];
        list[item.$idx] = data;
        if (llen > 1) {
            Log.throwError("ArtText必须且只能有1个图层", item.name);
            return;
        }
        var layer = layers[0];
        var lname = layer.name;
        var tempkeys = [];
        var flen = layer.frames.length;
        var frame = layer.frames[0];
        data[1] = 0;
        var elements = frame.elements;
        var elen = elements.length;
        for (var ei = 0; ei < elen; ei++) {
            var ele = elements[ei];
            var tempName = void 0;
            if (ele && ele.elementType === "instance" && ele.instanceType === "bitmap") {
                data[ei + 1] = solution.getElementData(ele);
                tempName = ele.libraryItem.name;
                tempName = tempName.substr(tempName.lastIndexOf("/") + 1);
                tempName = tempName.split(".")[0];
                var itn = +tempName;
                if (tempName == itn) {
                    tempkeys.push(itn);
                }
                else {
                    tempkeys.push(tempName);
                }
            }
        }
        data[0] = tempkeys;
    };
    return ArtWordParser;
}(ComWillCheck));
