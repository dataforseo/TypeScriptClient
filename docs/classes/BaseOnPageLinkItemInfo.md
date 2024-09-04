[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BaseOnPageLinkItemInfo

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

### new BaseOnPageLinkItemInfo()

> **new BaseOnPageLinkItemInfo**(`data`?): [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

#### Parameters

• **data?**: [`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md)

#### Returns

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

#### Defined in

main.ts:21504

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:21502

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:21514

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:21550

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

#### Defined in

main.ts:21523
