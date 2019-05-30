module.exports = function(app) {
     let widgets = [
    //     {  widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO" },
    //     {  widgetType: "HEADING", pageId: "321", size: 4, text: "Lore m ipsum" },
    //     {  widgetType: "IMAGE", pageId: "321", width: "100%", url: "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg" },
    //     {  widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum" },
    //     {  widgetType: "YOUTUBE ", pageId: "321", width: "100%", url: " https://youtu.be/AM 2Ivdi9c4E" }
    //   ];
// find all widgets by given pid
app.get(`/api/page/:pid/widget`, (req,res) => {
    //looking for all widgets with given pageId
    // if does not find any widget its still going to send out empty array through .map
    // filter pages that match following conditions
    const pid = req.params["pid"]
    const result = widgets.filter(
        (widget) => {
            return widget.pageId === pid
        }
    )
    res.json(result);
})

// Create new widget
 app.post("/api/widget", (req, res) => {
 const newWidget = req.body;
 widgets.push(newWidget);
 res.json(newWidget);
})
// get widget by id
app.get("/api/widget/:wgid", (req, res) =>{
    const wgid = req.params["wgid"];
    const widget = widgets.find(
        (widget) => (widget._id === wgid)
    )
    res.json(widget)
})
// update  widget
app.put("/api/widget", (req,res) => {
  const newWidget = req.body;
  widgets = widgets.map(
      (widget) => {
          if(widget._id === newWidget._id){
              widget = newWidget;
          }
          return widget;
      }
  )
  res.json(newWidget);
})
// Delete widget by given Id
app.delete("/api/widget/:wgid", (req, res) =>{
    const wgid = req.params["wgid"];
    const widget = widgets.find(
        (widget) => (widget._id === wgid)
    );
    const index = widgets.indexOf(widget);
    widgets.splice(index, 1);
    res.json(widget);
})
}