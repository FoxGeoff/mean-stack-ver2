# MeanStackVer2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Kanban Task: Understand the Basics

### Task: Adding our First Component

1. Add posts/post-create/post-create component
2. Add post-create template
3. Add: listen to event `<button (click)="onAddPost()">Save Post</button>`

### Task: Output Content

```html

<h1>Create a Post</h1>
<textarea #note row="6"></textarea>> <!-- # is a local ref -->
<hr>
<button (click)="onAddPost(note)">Save Post</button>

```

```TypeScript
  onAddPost(note: any) {
    alert(`Post added! ${note.value}`);
  }
```

1. string interpellation

```TypeScript
msg: string;

this.msg = "New Post Added";
// in template
{{ msg }}
```

1. console.dir(HTMLTextAreaElement); This will list all the properties
2. Two way binding ```[(ngModel)]="myProp"``` requires FormModule
3. ngModel is a directive - a funtion used in a template

### Task: Add: Material module

1. ```ng add @angular/material```
2. Ref. \Github\Sequelize_BookStore-finished

```Javascript
/**
 * CORE MODULE
 * Core folder should contain singleton
 * services shared throughout app
 *
 * Services that are specific to a feature can
 * go in the feature's folder
 *
 * Example: LoggingService, ErrorService,
 * DataSerice
 */

/**
 * SHARED MODULE: Reusable components, pipes and directives
 *
 * Shared folder should contain reusable
 * components, pipes and directives
 *
 * Example: CalendarComponent,
 * AutoCompleteComponent
 */
```

### Task: Add Fex Layout

1. Run: ```npm i -s @angular/flex-layout @angular/cdk```

### Task: Add: nav component

1. NOTE RELOAD VSCODE TO REMOVE ALL ERRORS!
2. Ref code project: wing-man-ver3
3. Ref for dividers: <https://www.angularjswiki.com/angular/angular-material-divider-mat-divider-example/>
