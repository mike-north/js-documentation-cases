# Table of contents

* [index.ts][SourceFile-0]
    * Functions
        * [add][FunctionDeclaration-0]
    * Interfaces
        * [VehicleLike][InterfaceDeclaration-0]
    * Variables
        * [SECRET_STRING][VariableDeclaration-0]

# index.ts

## Functions

### add

```typescript
function add(a: any, b: any): any;
```

**Parameters**

| Name | Type |
| ---- | ---- |
| a    | any  |
| b    | any  |

**Return type**

any

## Interfaces

### VehicleLike

A vehicle-like thing

```typescript
interface VehicleLike {
    drive(): void;
}
```
#### Method

```typescript
drive(): void;
```

**Return type**

void


## Classes

### [Car][ClassDeclaration-0]

A car is a 4-wheeled vehicle


----------

### [Unicycle][ClassDeclaration-2]

A Unicycle is a 1-wheeled vehicle


----------

### [Bike][ClassDeclaration-3]

A bike is a 2-wheeled vehicle


## Variables

### SECRET_STRING

```typescript
const SECRET_STRING: "shhhhh!";
```

**Type**

"shhhhh!"

[SourceFile-0]: index.md#indexts
[FunctionDeclaration-0]: index.md#add
[InterfaceDeclaration-0]: index.md#vehiclelike
[ClassDeclaration-0]: index/default.md#car
[ClassDeclaration-2]: index/unicycle.md#unicycle
[ClassDeclaration-3]: index/bike.md#bike
[VariableDeclaration-0]: index.md#secret_string