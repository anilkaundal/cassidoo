/*Given an IPv4 address and a netmask in CIDR notation, return a boolean
specifying whether the IP address is inside the given range.

Example:

$ inRange("192.168.4.27", "192.168.0.0/16")
$ true

$ inRange("192.168.4.27", "192.168.1.0/24")
$ false
*/

const addrToBits = (input) =>
  input
    .split(".")
    .map((str) => ("00000000" + (+str >>> 0).toString(2)).substr(-8))
    .join("");

function inRange(ipv4_in, cidr_in) {
  const [cidr_addr, leadingBits] = cidr_in.split("/");
  return (
    addrToBits(cidr_addr).substr(0, leadingBits) ===
    addrToBits(ipv4_in).substr(0, leadingBits)
  );
}

console.log(inRange("192.168.4.27", "192.168.0.0/16"));

console.log(inRange("192.168.4.27", "192.168.1.0/24"));
