**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new BaseOnPageResourceItemInfo(data)

> **new BaseOnPageResourceItemInfo**(`data`?): [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

#### Parameters

• **data?**: [`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md)

#### Returns

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

#### Source

main.ts:20637

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Source

main.ts:20635

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:20647

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:20688

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

#### Source

main.ts:20656
