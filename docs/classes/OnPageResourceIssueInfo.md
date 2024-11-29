[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageResourceIssueInfo

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

##### data?

[`IOnPageResourceIssueInfo`](../interfaces/IOnPageResourceIssueInfo.md)

#### Returns

[`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

#### Defined in

main.ts:166587

## Properties

### errors?

> `optional` **errors**: [`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)[]

resource errors

#### Implementation of

[`IOnPageResourceIssueInfo`](../interfaces/IOnPageResourceIssueInfo.md).[`errors`](../interfaces/IOnPageResourceIssueInfo.md#errors)

#### Defined in

main.ts:166581

***

### warnings?

> `optional` **warnings**: [`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)[]

resource warnings

#### Implementation of

[`IOnPageResourceIssueInfo`](../interfaces/IOnPageResourceIssueInfo.md).[`warnings`](../interfaces/IOnPageResourceIssueInfo.md#warnings)

#### Defined in

main.ts:166583

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:166596

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:166622

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

#### Defined in

main.ts:166615
