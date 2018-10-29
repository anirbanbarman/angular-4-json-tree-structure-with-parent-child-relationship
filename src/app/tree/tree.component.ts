import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tree",
  templateUrl: "./tree.component.html",
  styleUrls: ["./tree.component.css"]
})
export class TreeComponent implements OnInit {
  selectedItem: any;
  checkedItem: any;
  checkedItems = [];
  parentChildRelationArray = [];
  root: any;
  rootarray = [];
  list = [];

  parentChildRelation: string;

  constructor() {}

  ngOnInit() {
    this.list = [
      {
        title: "A",
        children: []
      },
      {
        title: "B",
        children: [
          {
            title: "C",
            children: []
          },
          {
            title: "D",
            children: [
              {
                title: "E",
                children: []
              },
              {
                title: "F",
                children: []
              },
              {
                title: "G",
                children: [
                  {
                    title: "H",
                    children: [
                      {
                        title: "I",
                        children: []
                      }
                    ]
                  },
                  {
                    title: "J",
                    children: []
                  }
                ]
              },
              {
                title: "K",
                children: [
                  {
                    title: "L",
                    children: []
                  }
                ]
              }
            ]
          },
          {
            title: "M",
            children: [
              {
                title: "N",
                children: [
                  {
                    title: "O",
                    children: []
                  },
                  {
                    title: "P",
                    children: []
                  },
                  {
                    title: "Q",
                    children: []
                  },
                  {
                    title: "R",
                    children: [
                      {
                        title: "S",
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
    this.jsonmapping(this.list," ");
  }
    jsonmapping(list,map) {
    list.forEach(element => {
      if(map ==" "){
        element.map = element.title;
      }
      else{
        element.map = map+"."+element.title;

      }


      this.jsonmapping(element.children,element.map);





    });
  }

  OncheckeboxClick(data, event,map) {


    this.checkedItem = data;
    this.parentChildRelation=map;



    if (event.target.checked === true) {
      this.checkedItems.push(this.checkedItem);
      this.parentChildRelationArray.push(this.parentChildRelation)

    } else {
      console.log(this.checkedItem);
      const index = this.checkedItems.indexOf(this.checkedItem);
      const index1= this.parentChildRelationArray.indexOf(this.parentChildRelation);
      if (index > -1) {
        this.checkedItems.splice(index, 1);
        this.parentChildRelationArray.splice(index,1)      }

    }
  }

  OnbtnClick( newValue) {


    newValue.showChild = !newValue.showChild;


  }
  OnbtnClick1(newValue) {
    newValue.showChild = !newValue.showChild;
  }
}
