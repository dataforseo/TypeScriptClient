[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPageResourceIssueInfo

# Class: OnPageResourceIssueInfo

resource errors and warnings

## Implements

- [`IOnPageResourceIssueInfo`](../interfaces/IOnPageResourceIssueInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageResourceIssueInfo()

> **new OnPageResourceIssueInfo**(`data`?): [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

#### Parameters

• **data?**: [`IOnPageResourceIssueInfo`](../interfaces/IOnPageResourceIssueInfo.md)

#### Returns

[`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

#### Defined in

main.ts:154960

## Properties

### errors?

> `optional` **errors**: [`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)[]

resource errors

#### Implementation of

[`IOnPageResourceIssueInfo`](../interfaces/IOnPageResourceIssueInfo.md).[`errors`](../interfaces/IOnPageResourceIssueInfo.md#errors)

#### Defined in

main.ts:154954

***

### warnings?

> `optional` **warnings**: [`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)[]

resource warnings

#### Implementation of

[`IOnPageResourceIssueInfo`](../interfaces/IOnPageResourceIssueInfo.md).[`warnings`](../interfaces/IOnPageResourceIssueInfo.md#warnings)

#### Defined in

main.ts:154956

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:154969

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:154995

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

#### Defined in

main.ts:154988
