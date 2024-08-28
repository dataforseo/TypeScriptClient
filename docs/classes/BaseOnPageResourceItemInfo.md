[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BaseOnPageResourceItemInfo

# Class: BaseOnPageResourceItemInfo

## Extended by

- [`HtmlResourceElementItem`](HtmlResourceElementItem.md)
- [`StylesheetResourceElementItem`](StylesheetResourceElementItem.md)
- [`ScriptResourceElementItem`](ScriptResourceElementItem.md)
- [`ImageResourceElementItem`](ImageResourceElementItem.md)
- [`BrokenResourceElementItem`](BrokenResourceElementItem.md)

## Implements

- [`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BaseOnPageResourceItemInfo()

> **new BaseOnPageResourceItemInfo**(`data`?): [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

#### Parameters

• **data?**: [`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md)

#### Returns

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

#### Defined in

main.ts:21369

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:21367

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:21379

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:21420

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

#### Defined in

main.ts:21388
