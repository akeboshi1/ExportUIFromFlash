class SliderParser extends ComWillCheck{
    constructor(){
        super(ExportType.Slider,/^ui[.](slider)/,null,"Slider");
        this.parseHandler = this.sliderParser;
    }
    
    private sliderParser(checker:ComWillCheck,item:FlashItem,list:any[],solution:Solution){
        let timeline = item.timeline;
        let layers = timeline.layers;
        let data = [];
        list[item.$idx]=data;
        if(layers.length !=2){
             Log.throwError("slider必须且只能有2个图层", item.name);
            return;
        }
        let layer = layers[0];
        let frame = layer.frames[0];
        let element = frame.elements[0];
        data[0] = solution.getElementData(element);
        
        layer = layers[1];
        frame = layer.frames[0];
        element = frame.elements[0];
        data[1]=solution.getElementData(element);
    }
}