**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MicrodataTestResultsInfo

# Class: MicrodataTestResultsInfo

## Implements

- [`IMicrodataTestResultsInfo`](../interfaces/IMicrodataTestResultsInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MicrodataTestResultsInfo(data)

> **new MicrodataTestResultsInfo**(`data`?): [`MicrodataTestResultsInfo`](MicrodataTestResultsInfo.md)

#### Parameters

• **data?**: [`IMicrodataTestResultsInfo`](../interfaces/IMicrodataTestResultsInfo.md)

#### Returns

[`MicrodataTestResultsInfo`](MicrodataTestResultsInfo.md)

#### Source

main.ts:158040

## Properties

### level?

> **`optional`** **level**: `string`

level of microdata error
can take the following values: fatal, error, warning, info

#### Implementation of

[`IMicrodataTestResultsInfo`](../interfaces/IMicrodataTestResultsInfo.md).[`level`](../interfaces/IMicrodataTestResultsInfo.md#level)

#### Source

main.ts:158033

***

### message?

> **`optional`** **message**: `string`

message associated with an error
message providing the details of the detected error

#### Implementation of

[`IMicrodataTestResultsInfo`](../interfaces/IMicrodataTestResultsInfo.md).[`message`](../interfaces/IMicrodataTestResultsInfo.md#message)

#### Source

main.ts:158036

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:158049

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:158067

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MicrodataTestResultsInfo`](MicrodataTestResultsInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MicrodataTestResultsInfo`](MicrodataTestResultsInfo.md)

#### Source

main.ts:158060
