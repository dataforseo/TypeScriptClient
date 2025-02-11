[**Documentation**](../README.md)

***

[Documentation](../README.md) / DeliveryInfo

# Class: DeliveryInfo

Defined in: main.ts:186492

## Implements

- [`IDeliveryInfo`](../interfaces/IDeliveryInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DeliveryInfo()

> **new DeliveryInfo**(`data`?): [`DeliveryInfo`](DeliveryInfo.md)

Defined in: main.ts:186503

#### Parameters

##### data?

[`IDeliveryInfo`](../interfaces/IDeliveryInfo.md)

#### Returns

[`DeliveryInfo`](DeliveryInfo.md)

## Properties

### delivery\_message?

> `optional` **delivery\_message**: `string`

Defined in: main.ts:186495

delivery information
message accompanying the delivery information as posted by the seller

#### Implementation of

[`IDeliveryInfo`](../interfaces/IDeliveryInfo.md).[`delivery_message`](../interfaces/IDeliveryInfo.md#delivery_message)

***

### delivery\_price?

> `optional` **delivery\_price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:186499

price for the delivery
price of the delivery based on the location you specified in the POST request;
if free delivery is available, the value is null

#### Implementation of

[`IDeliveryInfo`](../interfaces/IDeliveryInfo.md).[`delivery_price`](../interfaces/IDeliveryInfo.md#delivery_price)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:186512

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:186530

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DeliveryInfo`](DeliveryInfo.md)

Defined in: main.ts:186523

#### Parameters

##### data

`any`

#### Returns

[`DeliveryInfo`](DeliveryInfo.md)
