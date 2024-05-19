**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BaseOnPageLinkItemInfo

# Class: BaseOnPageLinkItemInfo

## Extended by

- [`AnchorLinkElementItem`](AnchorLinkElementItem.md)
- [`ImageLinkElementItem`](ImageLinkElementItem.md)
- [`AlternateLinkElementItem`](AlternateLinkElementItem.md)
- [`RedirectLinkElementItem`](RedirectLinkElementItem.md)

## Implements

- [`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BaseOnPageLinkItemInfo(data)

> **new BaseOnPageLinkItemInfo**(`data`?): [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

#### Parameters

• **data?**: [`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md)

#### Returns

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

#### Source

main.ts:21144

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Source

main.ts:21142

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:21154

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:21190

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

#### Source

main.ts:21163
