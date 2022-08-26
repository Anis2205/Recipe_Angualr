import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { Shoppinglistservice } from '../shopping_list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  editmode = false
  editpos : number  | undefined

  subcription : Subscription  | undefined
  // @Output() addeingredient = new EventEmitter<{name:string;amount:number}>();
  //  @ViewChild('ingredientname') nameofingredient!: ElementRef;
  //  @ViewChild('ingredientamount') amountofingredient!: ElementRef;
  // @Output() addeingredient = new EventEmitter<{name:string;amount:number}>();
  //  @ViewChild('ingredientname') nameofingredient!: ElementRef;
  //  @ViewChild('ingredientamount') amountofingredient!: ElementRef;

  // @Output() addeingredient = new EventEmitter<{name:string;amount:number}>();
  //  @ViewChild('ingredientname') nameofingredient!: ElementRef;
  //  @ViewChild('ingredientamount') amountofingredient!: ElementRef;

  // @Output() addeingredient = new EventEmitter<{name:string;amount:number}>();
  //  @ViewChild('ingredientname') nameofingredient!: ElementRef;
  //  @ViewChild('ingredientamount') amountofingredient!: ElementRef;
   @ViewChild('formvalues',{static:false}) sform : NgForm | undefined
   editeditem : Ingredient | undefined
   constructor(private shoppinglistservice : Shoppinglistservice) { }

  ngOnInit(): void {

    this.subcription = this.shoppinglistservice.startediting.subscribe(
      (indexpos : number)=>{
        this.editmode = true
        this.editpos = indexpos
        this.editeditem = this.shoppinglistservice.getvalue(indexpos)
        this?.sform?.setValue({
          iname : this.editeditem.name,
          iamount: this.editeditem.amount


        })
      }
    )
  }
  ngOnDestroy(){
    this.subcription?.unsubscribe()
  }
  onsubmit(form : NgForm){
    const value = form.value
    if(!this.editmode){ 
      const newingredient = new Ingredient(value.iname,value.iamount)
      this.shoppinglistservice.addingingredient(newingredient)
      console.log(form)}
      else{
        this.shoppinglistservice.edititem(this.editpos!,{name:value.iname,amount:value.iamount})
        
      }
      this.editmode=false
      this.sform?.reset()
  
   }
   clear(){
     this.sform?.reset()
     this.editmode=false
   }

   delete(){
     this.shoppinglistservice.deleteitem(this.editpos!)
     this.clear()
   }

  // onaddingredient(){
  //     this.addeingredient.emit({
  //       name:this.nameofingredient.nativeElement.value,
  //       amount:this.amountofingredient.nativeElement.value
  //     })
  // }
    // onaddingredient(){
  //   // this.shoppinglistservice.addingingredient({
  //   //   // name:this.nameofingredient.nativeElement.value,
  //   //   // amount:this.amountofingredient.nativeElement.value
  //   // })

  // }
 
  



}
