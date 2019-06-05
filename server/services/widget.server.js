module.exports = function(app) {
    //  let widgets = [
    //     {  widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO" },
    //     {  widgetType: "HEADING", pageId: "321", size: 4, text: "Lore m ipsum" },
    //     {  widgetType: "IMAGE", pageId: "321", width: "100%", url: "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg" },
    //     {  widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum" },
    //     {  widgetType: "YOUTUBE ", pageId: "321", width: "100%", url: " https://youtu.be/AM 2Ivdi9c4E" }
    //   ];
     //Import widget model first
    const widgetModel = require("../models/widget/widget.model")
// find all widgets by given pid
app.get(`/api/page/:pid/widget`, async (req,res) => {
   
   
    //looking for all widgets with given pageId
    // if does not find any widget its still going to send out empty array through .map
    // filter pages that match following conditions
    const pid = req.params["pid"]
    const widgets = await widgetModel.findWidgetsForPage(pid);

//     const result = widgets.filter(
//         (widget) => {
//             return widget.pageId === pid
//         }
//     )
    res.json(widgets);
});

// Create new widget
 app.post("/api/widget", async (req, res) => {
 const newWidget = req.body;
 const data = await widgetModel.createWidget(newWidget);
 res.json(data);
});
// get widget by id
app.get("/api/widget/:wgid", async (req, res) =>{
    const wgid = req.params["wgid"];
   const widget = await widgetModel.findWidget(wgid);
   res.json(widget);
});

// update  widget
app.put("/api/widget", async (req,res) => {
  const newWidget = req.body;
  const data = await widgetModel.updateWidget(newWidget);
  res.json(data);
});

// Delete widget by given Id
app.delete("/api/widget/:wgid", async (req, res) => {
    const wgid = req.params["wgid"];
    const data = await widgetModel.deleteWidget(wgid);
    // const widget = widgets.find(
    //     (widget) => (widget._id === wgid)
    // );
    // const index = widgets.indexOf(widget);
    // widgets.splice(index, 1);
     res.json(data);
});
};