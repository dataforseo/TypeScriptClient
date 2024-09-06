[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppsInfo

# Class: AppsInfo

## Implements

- [`IAppsInfo`](../interfaces/IAppsInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppsInfo()

> **new AppsInfo**(`data`?): [`AppsInfo`](AppsInfo.md)

#### Parameters

• **data?**: [`IAppsInfo`](../interfaces/IAppsInfo.md)

#### Returns

[`AppsInfo`](AppsInfo.md)

#### Defined in

main.ts:189606

## Properties

### app\_id?

> `optional` **app\_id**: `string`

ID of the app

#### Implementation of

[`IAppsInfo`](../interfaces/IAppsInfo.md).[`app_id`](../interfaces/IAppsInfo.md#app_id)

#### Defined in

main.ts:189598

***

### title?

> `optional` **title**: `string`

title of the app

#### Implementation of

[`IAppsInfo`](../interfaces/IAppsInfo.md).[`title`](../interfaces/IAppsInfo.md#title)

#### Defined in

main.ts:189600

***

### url?

> `optional` **url**: `string`

URL to the app page on Google Play

#### Implementation of

[`IAppsInfo`](../interfaces/IAppsInfo.md).[`url`](../interfaces/IAppsInfo.md#url)

#### Defined in

main.ts:189602

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:189615

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:189634

***

### fromJS()

> `static` **fromJS**(`data`): [`AppsInfo`](AppsInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppsInfo`](AppsInfo.md)

#### Defined in

main.ts:189627
