var tipuesearch = {"pages":[{"text":"BeFoR64 BeFoR64, Base64 encoding/decoding library for FoRtran poor men A KISS library for base64 encoding/decoding for modern (2003+) Fortran projects. What is BeFoR64? Modern Fortran standards (2003+) have introduced better support for strings manipulations. Exploiting such new Fortran capabilities, BeFoR64 provides an easy to use module library for encoding and decoding Fortran types (binary internal representation) in ascii- base64 -encoded string. Go to Top Main features User-friendly methods for encoding/decoding in base64: encode real/integer scalar variables; decode real/integer scalar variables; encode real/integer array variables; decode real/integer array variables; encode character scalar variables; decode character scalar variables; encode character array variables; decode character array variables; encode unlimited polymorphic scalar variables; decode unlimited polymorphic scalar variables; encode unlimited polymorphic array variables; decode unlimited polymorphic array variables; user-friendly methods for packing heterogeneous data: pack integer/integer (different kinds) scalars; pack integer/integer (different kinds) arrays; pack real/real (different kinds) scalars; pack real/real (different kinds) arrays; pack integer/real scalars; pack integer/real arrays; errors trapping mechanism. Any feature request is welcome. Go to Top Copyrights BeFoR64 is an open source project, it is distributed under the GPL v3 . Anyone is interest to use, to develop or to contribute to BeFoR64 is welcome. Go to Top Documentation Besides this README file the BeFoR64 documentation is contained into its own wiki . Detailed documentation of the API is contained into the GitHub Pages that can also be created locally by means of ford tool . A Taste of BeFoR64 To be written. Go to Top Version History In the following the changelog of most important releases is reported. v0.0.1 Download ZIP ball or TAR one First Stable Release. Go to Top ChangeLog Version v0.0.1 First stable release. Developer Info Stefano Zaghi","tags":"home","loc":"index.html","title":" BeFoR64 "},{"text":"Procedures Procedure Location Procedure Type Description autotest Lib_Base64 Subroutine Procedure for autotesting the library functionalities. b64_encode Lib_Base64 Interface Procedure for encoding numbers (integer and real) to base64. b64_encode_I1_a Lib_Base64 Subroutine Procedure for encoding array numbers to base64 (I1P). b64_encode_I2_a Lib_Base64 Subroutine Procedure for encoding array numbers to base64 (I2P). b64_encode_I4_a Lib_Base64 Subroutine Procedure for encoding array numbers to base64 (I4P). b64_encode_I8_a Lib_Base64 Subroutine Procedure for encoding array numbers to base64 (I8P). b64_encode_R4_a Lib_Base64 Subroutine Procedure for encoding array numbers to base64 (R4P). b64_encode_R8_a Lib_Base64 Subroutine Procedure for encoding array numbers to base64 (R8P). b64_init Lib_Base64 Subroutine Procedure for initializing the BeFoR64 library. bctoi_I1P IR_Precision Function Procedure for converting bit-string to integer. This function achieves casting of bit-string to integer. bctoi_I2P IR_Precision Function Procedure for converting bit-string to integer. This function achieves casting of bit-string to integer. bctoi_I4P IR_Precision Function Procedure for converting bit-string to integer. This function achieves casting of bit-string to integer. bctoi_I8P IR_Precision Function Procedure for converting bit-string to integer. This function achieves casting of bit-string to integer. bcton IR_Precision Interface Procedure for converting bit-string to number, real or initeger, (bit-string to number type casting). bctor_R4P IR_Precision Function Procedure for converting bit-string to real. This function achieves casting of bit-string to real. bctor_R8P IR_Precision Function Procedure for converting bit-string to real. This function achieves casting of bit-string to real. bit_size IR_Precision Interface Overloading of the intrinsic bit_size function for computing the number of bits of (also) real and character variables. bit_size_chr IR_Precision Function Procedure for computing the number of bits of a character variable. bit_size_R16P IR_Precision Function Procedure for computing the number of bits of a real variable. bit_size_R4P IR_Precision Function Procedure for computing the number of bits of a real variable. bit_size_R8P IR_Precision Function Procedure for computing the number of bits of a real variable. bstr IR_Precision Interface Procedure for converting number, real and integer, to bit-string (number to bit-string type casting). bstr_I1P IR_Precision Function Procedure for converting integer to string of bits. This function achieves casting of integer to bit-string. bstr_I2P IR_Precision Function Procedure for converting integer to string of bits. This function achieves casting of integer to bit-string. bstr_I4P IR_Precision Function Procedure for converting integer to string of bits. This function achieves casting of integer to bit-string. bstr_I8P IR_Precision Function Procedure for converting integer to string of bits. This function achieves casting of integer to bit-string. bstr_R16P IR_Precision Function Procedure for converting real to string of bits. This function achieves casting of real to bit-string. bstr_R4P IR_Precision Function Procedure for converting real to string of bits. This function achieves casting of real to bit-string. bstr_R8P IR_Precision Function Procedure for converting real to string of bits. This function achieves casting of real to bit-string. byte_size IR_Precision Interface Overloading of the byte_size function for computing the number of bytes. byte_size_chr IR_Precision Function Procedure for computing the number of bytes of a character variable. byte_size_I1P IR_Precision Function Procedure for computing the number of bytes of an integer variable. byte_size_I2P IR_Precision Function Procedure for computing the number of bytes of an integer variable. byte_size_I4P IR_Precision Function Procedure for computing the number of bytes of an integer variable. byte_size_I8P IR_Precision Function Procedure for computing the number of bytes of an integer variable. byte_size_R16P IR_Precision Function Procedure for computing the number of bytes of a real variable. byte_size_R4P IR_Precision Function Procedure for computing the number of bytes of a real variable. byte_size_R8P IR_Precision Function Procedure for computing the number of bytes of a real variable. check_endian IR_Precision Subroutine Subroutine for checking the type of bit ordering (big or little endian) of the running architecture. ctoi_I1P IR_Precision Function Procedure for converting string to integer. This function achieves casting of string to integer. ctoi_I2P IR_Precision Function Procedure for converting string to integer. This function achieves casting of string to integer. ctoi_I4P IR_Precision Function Procedure for converting string to integer. This function achieves casting of string to integer. ctoi_I8P IR_Precision Function Procedure for converting string to integer. This function achieves casting of string to integer. cton IR_Precision Interface Procedure for converting string to number, real or initeger, (string to number type casting). ctor_R16P IR_Precision Function Procedure for converting string to real. This function achieves casting of string to real. ctor_R4P IR_Precision Function Procedure for converting string to real. This function achieves casting of string to real. ctor_R8P IR_Precision Function Procedure for converting string to real. This function achieves casting of string to real. digit IR_Precision Interface Procedure for computing the number of digits in decimal base of the input integer. digit_I1 IR_Precision Function Procedure for computing the number of digits in decimal base of the input integer. digit_I2 IR_Precision Function Procedure for computing the number of digits in decimal base of the input integer. digit_I4 IR_Precision Function Procedure for computing the number of digits in decimal base of the input integer. digit_I8 IR_Precision Function Procedure for computing the number of digits in decimal base of the input integer. encode_bits Lib_Base64 Subroutine Procedure for encoding a bits stream (must be multiple of 24 bits) into base64 charcaters code (of length multiple of 4). IR_init IR_Precision Subroutine Procedure for initilizing module's variables that are not initialized into the definition specification. IR_Print IR_Precision Subroutine Procedure for printing to the standard output the kind definition of reals and integers and the utility variables. is_little_endian IR_Precision Function Procedure for checking if the type of the bit ordering of the running architecture is little endian. pack_data Lib_Pack_Data Interface Procedure for packing different kinds of data into single I1P array. pack_data_I1_I2 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_I1_I4 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_I1_I8 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_I1_R4 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_I1_R8 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_I2_I1 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_I2_I4 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_I2_I8 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_I2_R4 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_I2_R8 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_I4_I1 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_I4_I2 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_I4_I8 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_I4_R4 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_I4_R8 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_I8_I1 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_I8_I2 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_I8_I4 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_I8_R4 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_I8_R8 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_R4_I1 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_R4_I2 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_R4_I4 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_R4_I8 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_R4_R8 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_R8_I1 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_R8_I2 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_R8_I4 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_R8_I8 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. pack_data_R8_R4 Lib_Pack_Data Subroutine Procedure for packing different kinds of data into single I1P array. str IR_Precision Interface Procedure for converting number, real and integer, to string (number to string type casting). str_I1P IR_Precision Function Procedure for converting integer to string. This function achieves casting of integer to string. str_I2P IR_Precision Function Procedure for converting integer to string. This function achieves casting of integer to string. str_I4P IR_Precision Function Procedure for converting integer to string. This function achieves casting of integer to string. str_I8P IR_Precision Function Procedure for converting integer to string. This function achieves casting of integer to string. str_R16P IR_Precision Function Procedure for converting real to string. This function achieves casting of real to string. str_R4P IR_Precision Function Procedure for converting real to string. This function achieves casting of real to string. str_R8P IR_Precision Function Procedure for converting real to string. This function achieves casting of real to string. strf_I1P IR_Precision Function Procedure for converting integer to string. This function achieves casting of integer to string. strf_I2P IR_Precision Function Procedure for converting integer to string. This function achieves casting of integer to string. strf_I4P IR_Precision Function Procedure for converting integer to string. This function achieves casting of integer to string. strf_I8P IR_Precision Function Procedure for converting integer to string. This function achieves casting of integer to string. strf_R16P IR_Precision Function Procedure for converting real to string. This function achieves casting of real to string. strf_R4P IR_Precision Function Procedure for converting real to string. This function achieves casting of real to string. strf_R8P IR_Precision Function Procedure for converting real to string. This function achieves casting of real to string. strz IR_Precision Interface Procedure for converting number, integer, to string, prefixing with the right number of zeros (number to string type\n casting with zero padding). strz_I1P IR_Precision Function Procedure for converting integer to string, prefixing with the right number of zeros. This function achieves casting of\n integer to string. strz_I2P IR_Precision Function Procedure for converting integer to string, prefixing with the right number of zeros. This function achieves casting of\n integer to string. strz_I4P IR_Precision Function Procedure for converting integer to string, prefixing with the right number of zeros. This function achieves casting of\n integer to string. strz_I8P IR_Precision Function Procedure for converting integer to string, prefixing with the right number of zeros. This function achieves casting of\n integer to string.","tags":"list procedures","loc":"lists/procedures.html","title":"\nAll Procedures – BeFoR64\n"},{"text":"Source Files File Description IR_Precision.f90 Pure Fortran (2003+) library for ensuring codes portability Lib_Base64.f90 BeFoR64, Base64 encoding/decoding library for FoRtran poor men Lib_Pack_Data.f90 KISS library for packing heterogeneous data into single (homogeneous) packed one Test_Driver.f90 Testing program for BeFoR64, Base64 encoding/decoding library for FoRtran poor men","tags":"list files","loc":"lists/files.html","title":"\nAll Files – BeFoR64\n"},{"text":"Modules Module Source File Description IR_Precision IR_Precision.f90 Pure Fortran (2003+) library for ensuring codes portability Lib_Base64 Lib_Base64.f90 BeFoR64, Base64 encoding/decoding library for FoRtran poor men Lib_Pack_Data Lib_Pack_Data.f90 KISS library for packing heterogeneous data into single (homogeneous) packed one","tags":"list modules","loc":"lists/modules.html","title":"\nAll Modules – BeFoR64\n"},{"text":"IR_Precision.f90 Source File Source File IR_Precision.f90","tags":"","loc":"sourcefile/ir_precision.f90.html","title":"IR_Precision.f90 – BeFoR64"},{"text":"Lib_Pack_Data.f90 Source File Source File Lib_Pack_Data.f90","tags":"","loc":"sourcefile/lib_pack_data.f90.html","title":"Lib_Pack_Data.f90 – BeFoR64"},{"text":"Test_Driver.f90 Source File Source File Test_Driver.f90","tags":"","loc":"sourcefile/test_driver.f90.html","title":"Test_Driver.f90 – BeFoR64"},{"text":"Lib_Base64.f90 Source File Source File Lib_Base64.f90","tags":"","loc":"sourcefile/lib_base64.f90.html","title":"Lib_Base64.f90 – BeFoR64"},{"text":"is_little_endian Function Source File IR_Precision.f90 IR_Precision is_little_endian","tags":"","loc":"proc/is_little_endian.html","title":"is_little_endian – BeFoR64"},{"text":"bit_size_R16P Function Source File IR_Precision.f90 IR_Precision bit_size_R16P","tags":"","loc":"proc/bit_size_r16p.html","title":"bit_size_R16P – BeFoR64"},{"text":"bit_size_R8P Function Source File IR_Precision.f90 IR_Precision bit_size_R8P","tags":"","loc":"proc/bit_size_r8p.html","title":"bit_size_R8P – BeFoR64"},{"text":"bit_size_R4P Function Source File IR_Precision.f90 IR_Precision bit_size_R4P","tags":"","loc":"proc/bit_size_r4p.html","title":"bit_size_R4P – BeFoR64"},{"text":"bit_size_chr Function Source File IR_Precision.f90 IR_Precision bit_size_chr","tags":"","loc":"proc/bit_size_chr.html","title":"bit_size_chr – BeFoR64"},{"text":"byte_size_I8P Function Source File IR_Precision.f90 IR_Precision byte_size_I8P","tags":"","loc":"proc/byte_size_i8p.html","title":"byte_size_I8P – BeFoR64"},{"text":"byte_size_I4P Function Source File IR_Precision.f90 IR_Precision byte_size_I4P","tags":"","loc":"proc/byte_size_i4p.html","title":"byte_size_I4P – BeFoR64"},{"text":"byte_size_I2P Function Source File IR_Precision.f90 IR_Precision byte_size_I2P","tags":"","loc":"proc/byte_size_i2p.html","title":"byte_size_I2P – BeFoR64"},{"text":"byte_size_I1P Function Source File IR_Precision.f90 IR_Precision byte_size_I1P","tags":"","loc":"proc/byte_size_i1p.html","title":"byte_size_I1P – BeFoR64"},{"text":"byte_size_R16P Function Source File IR_Precision.f90 IR_Precision byte_size_R16P","tags":"","loc":"proc/byte_size_r16p.html","title":"byte_size_R16P – BeFoR64"},{"text":"byte_size_R8P Function Source File IR_Precision.f90 IR_Precision byte_size_R8P","tags":"","loc":"proc/byte_size_r8p.html","title":"byte_size_R8P – BeFoR64"},{"text":"byte_size_R4P Function Source File IR_Precision.f90 IR_Precision byte_size_R4P","tags":"","loc":"proc/byte_size_r4p.html","title":"byte_size_R4P – BeFoR64"},{"text":"byte_size_chr Function Source File IR_Precision.f90 IR_Precision byte_size_chr","tags":"","loc":"proc/byte_size_chr.html","title":"byte_size_chr – BeFoR64"},{"text":"strf_R16P Function Source File IR_Precision.f90 IR_Precision strf_R16P","tags":"","loc":"proc/strf_r16p.html","title":"strf_R16P – BeFoR64"},{"text":"strf_R8P Function Source File IR_Precision.f90 IR_Precision strf_R8P","tags":"","loc":"proc/strf_r8p.html","title":"strf_R8P – BeFoR64"},{"text":"strf_R4P Function Source File IR_Precision.f90 IR_Precision strf_R4P","tags":"","loc":"proc/strf_r4p.html","title":"strf_R4P – BeFoR64"},{"text":"strf_I8P Function Source File IR_Precision.f90 IR_Precision strf_I8P","tags":"","loc":"proc/strf_i8p.html","title":"strf_I8P – BeFoR64"},{"text":"strf_I4P Function Source File IR_Precision.f90 IR_Precision strf_I4P","tags":"","loc":"proc/strf_i4p.html","title":"strf_I4P – BeFoR64"},{"text":"strf_I2P Function Source File IR_Precision.f90 IR_Precision strf_I2P","tags":"","loc":"proc/strf_i2p.html","title":"strf_I2P – BeFoR64"},{"text":"strf_I1P Function Source File IR_Precision.f90 IR_Precision strf_I1P","tags":"","loc":"proc/strf_i1p.html","title":"strf_I1P – BeFoR64"},{"text":"str_R16P Function Source File IR_Precision.f90 IR_Precision str_R16P","tags":"","loc":"proc/str_r16p.html","title":"str_R16P – BeFoR64"},{"text":"str_R8P Function Source File IR_Precision.f90 IR_Precision str_R8P","tags":"","loc":"proc/str_r8p.html","title":"str_R8P – BeFoR64"},{"text":"str_R4P Function Source File IR_Precision.f90 IR_Precision str_R4P","tags":"","loc":"proc/str_r4p.html","title":"str_R4P – BeFoR64"},{"text":"str_I8P Function Source File IR_Precision.f90 IR_Precision str_I8P","tags":"","loc":"proc/str_i8p.html","title":"str_I8P – BeFoR64"},{"text":"str_I4P Function Source File IR_Precision.f90 IR_Precision str_I4P","tags":"","loc":"proc/str_i4p.html","title":"str_I4P – BeFoR64"},{"text":"str_I2P Function Source File IR_Precision.f90 IR_Precision str_I2P","tags":"","loc":"proc/str_i2p.html","title":"str_I2P – BeFoR64"},{"text":"str_I1P Function Source File IR_Precision.f90 IR_Precision str_I1P","tags":"","loc":"proc/str_i1p.html","title":"str_I1P – BeFoR64"},{"text":"strz_I8P Function Source File IR_Precision.f90 IR_Precision strz_I8P","tags":"","loc":"proc/strz_i8p.html","title":"strz_I8P – BeFoR64"},{"text":"strz_I4P Function Source File IR_Precision.f90 IR_Precision strz_I4P","tags":"","loc":"proc/strz_i4p.html","title":"strz_I4P – BeFoR64"},{"text":"strz_I2P Function Source File IR_Precision.f90 IR_Precision strz_I2P","tags":"","loc":"proc/strz_i2p.html","title":"strz_I2P – BeFoR64"},{"text":"strz_I1P Function Source File IR_Precision.f90 IR_Precision strz_I1P","tags":"","loc":"proc/strz_i1p.html","title":"strz_I1P – BeFoR64"},{"text":"ctor_R16P Function Source File IR_Precision.f90 IR_Precision ctor_R16P","tags":"","loc":"proc/ctor_r16p.html","title":"ctor_R16P – BeFoR64"},{"text":"ctor_R8P Function Source File IR_Precision.f90 IR_Precision ctor_R8P","tags":"","loc":"proc/ctor_r8p.html","title":"ctor_R8P – BeFoR64"},{"text":"ctor_R4P Function Source File IR_Precision.f90 IR_Precision ctor_R4P","tags":"","loc":"proc/ctor_r4p.html","title":"ctor_R4P – BeFoR64"},{"text":"ctoi_I8P Function Source File IR_Precision.f90 IR_Precision ctoi_I8P","tags":"","loc":"proc/ctoi_i8p.html","title":"ctoi_I8P – BeFoR64"},{"text":"ctoi_I4P Function Source File IR_Precision.f90 IR_Precision ctoi_I4P","tags":"","loc":"proc/ctoi_i4p.html","title":"ctoi_I4P – BeFoR64"},{"text":"ctoi_I2P Function Source File IR_Precision.f90 IR_Precision ctoi_I2P","tags":"","loc":"proc/ctoi_i2p.html","title":"ctoi_I2P – BeFoR64"},{"text":"ctoi_I1P Function Source File IR_Precision.f90 IR_Precision ctoi_I1P","tags":"","loc":"proc/ctoi_i1p.html","title":"ctoi_I1P – BeFoR64"},{"text":"bstr_R16P Function Source File IR_Precision.f90 IR_Precision bstr_R16P","tags":"","loc":"proc/bstr_r16p.html","title":"bstr_R16P – BeFoR64"},{"text":"bstr_R8P Function Source File IR_Precision.f90 IR_Precision bstr_R8P","tags":"","loc":"proc/bstr_r8p.html","title":"bstr_R8P – BeFoR64"},{"text":"bstr_R4P Function Source File IR_Precision.f90 IR_Precision bstr_R4P","tags":"","loc":"proc/bstr_r4p.html","title":"bstr_R4P – BeFoR64"},{"text":"bstr_I8P Function Source File IR_Precision.f90 IR_Precision bstr_I8P","tags":"","loc":"proc/bstr_i8p.html","title":"bstr_I8P – BeFoR64"},{"text":"bstr_I4P Function Source File IR_Precision.f90 IR_Precision bstr_I4P","tags":"","loc":"proc/bstr_i4p.html","title":"bstr_I4P – BeFoR64"},{"text":"bstr_I2P Function Source File IR_Precision.f90 IR_Precision bstr_I2P","tags":"","loc":"proc/bstr_i2p.html","title":"bstr_I2P – BeFoR64"},{"text":"bstr_I1P Function Source File IR_Precision.f90 IR_Precision bstr_I1P","tags":"","loc":"proc/bstr_i1p.html","title":"bstr_I1P – BeFoR64"},{"text":"bctor_R8P Function Source File IR_Precision.f90 IR_Precision bctor_R8P","tags":"","loc":"proc/bctor_r8p.html","title":"bctor_R8P – BeFoR64"},{"text":"bctor_R4P Function Source File IR_Precision.f90 IR_Precision bctor_R4P","tags":"","loc":"proc/bctor_r4p.html","title":"bctor_R4P – BeFoR64"},{"text":"bctoi_I8P Function Source File IR_Precision.f90 IR_Precision bctoi_I8P","tags":"","loc":"proc/bctoi_i8p.html","title":"bctoi_I8P – BeFoR64"},{"text":"bctoi_I4P Function Source File IR_Precision.f90 IR_Precision bctoi_I4P","tags":"","loc":"proc/bctoi_i4p.html","title":"bctoi_I4P – BeFoR64"},{"text":"bctoi_I2P Function Source File IR_Precision.f90 IR_Precision bctoi_I2P","tags":"","loc":"proc/bctoi_i2p.html","title":"bctoi_I2P – BeFoR64"},{"text":"bctoi_I1P Function Source File IR_Precision.f90 IR_Precision bctoi_I1P","tags":"","loc":"proc/bctoi_i1p.html","title":"bctoi_I1P – BeFoR64"},{"text":"digit_I8 Function Source File IR_Precision.f90 IR_Precision digit_I8","tags":"","loc":"proc/digit_i8.html","title":"digit_I8 – BeFoR64"},{"text":"digit_I4 Function Source File IR_Precision.f90 IR_Precision digit_I4","tags":"","loc":"proc/digit_i4.html","title":"digit_I4 – BeFoR64"},{"text":"digit_I2 Function Source File IR_Precision.f90 IR_Precision digit_I2","tags":"","loc":"proc/digit_i2.html","title":"digit_I2 – BeFoR64"},{"text":"digit_I1 Function Source File IR_Precision.f90 IR_Precision digit_I1","tags":"","loc":"proc/digit_i1.html","title":"digit_I1 – BeFoR64"},{"text":"check_endian Subroutine Source File IR_Precision.f90 IR_Precision check_endian","tags":"","loc":"proc/check_endian.html","title":"check_endian – BeFoR64"},{"text":"IR_init Subroutine Source File IR_Precision.f90 IR_Precision IR_init","tags":"","loc":"proc/ir_init.html","title":"IR_init – BeFoR64"},{"text":"IR_Print Subroutine Source File IR_Precision.f90 IR_Precision IR_Print","tags":"","loc":"proc/ir_print.html","title":"IR_Print – BeFoR64"},{"text":"bit_size Interface Source File IR_Precision.f90 IR_Precision bit_size","tags":"","loc":"interface/bit_size.html","title":"bit_size – BeFoR64"},{"text":"byte_size Interface Source File IR_Precision.f90 IR_Precision byte_size","tags":"","loc":"interface/byte_size.html","title":"byte_size – BeFoR64"},{"text":"str Interface Source File IR_Precision.f90 IR_Precision str","tags":"","loc":"interface/str.html","title":"str – BeFoR64"},{"text":"strz Interface Source File IR_Precision.f90 IR_Precision strz","tags":"","loc":"interface/strz.html","title":"strz – BeFoR64"},{"text":"cton Interface Source File IR_Precision.f90 IR_Precision cton","tags":"","loc":"interface/cton.html","title":"cton – BeFoR64"},{"text":"bstr Interface Source File IR_Precision.f90 IR_Precision bstr","tags":"","loc":"interface/bstr.html","title":"bstr – BeFoR64"},{"text":"bcton Interface Source File IR_Precision.f90 IR_Precision bcton","tags":"","loc":"interface/bcton.html","title":"bcton – BeFoR64"},{"text":"digit Interface Source File IR_Precision.f90 IR_Precision digit","tags":"","loc":"interface/digit.html","title":"digit – BeFoR64"},{"text":"pack_data_R8_R4 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_R8_R4","tags":"","loc":"proc/pack_data_r8_r4.html","title":"pack_data_R8_R4 – BeFoR64"},{"text":"pack_data_R8_I8 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_R8_I8","tags":"","loc":"proc/pack_data_r8_i8.html","title":"pack_data_R8_I8 – BeFoR64"},{"text":"pack_data_R8_I4 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_R8_I4","tags":"","loc":"proc/pack_data_r8_i4.html","title":"pack_data_R8_I4 – BeFoR64"},{"text":"pack_data_R8_I2 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_R8_I2","tags":"","loc":"proc/pack_data_r8_i2.html","title":"pack_data_R8_I2 – BeFoR64"},{"text":"pack_data_R8_I1 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_R8_I1","tags":"","loc":"proc/pack_data_r8_i1.html","title":"pack_data_R8_I1 – BeFoR64"},{"text":"pack_data_R4_R8 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_R4_R8","tags":"","loc":"proc/pack_data_r4_r8.html","title":"pack_data_R4_R8 – BeFoR64"},{"text":"pack_data_R4_I8 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_R4_I8","tags":"","loc":"proc/pack_data_r4_i8.html","title":"pack_data_R4_I8 – BeFoR64"},{"text":"pack_data_R4_I4 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_R4_I4","tags":"","loc":"proc/pack_data_r4_i4.html","title":"pack_data_R4_I4 – BeFoR64"},{"text":"pack_data_R4_I2 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_R4_I2","tags":"","loc":"proc/pack_data_r4_i2.html","title":"pack_data_R4_I2 – BeFoR64"},{"text":"pack_data_R4_I1 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_R4_I1","tags":"","loc":"proc/pack_data_r4_i1.html","title":"pack_data_R4_I1 – BeFoR64"},{"text":"pack_data_I8_R8 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_I8_R8","tags":"","loc":"proc/pack_data_i8_r8.html","title":"pack_data_I8_R8 – BeFoR64"},{"text":"pack_data_I8_R4 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_I8_R4","tags":"","loc":"proc/pack_data_i8_r4.html","title":"pack_data_I8_R4 – BeFoR64"},{"text":"pack_data_I8_I4 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_I8_I4","tags":"","loc":"proc/pack_data_i8_i4.html","title":"pack_data_I8_I4 – BeFoR64"},{"text":"pack_data_I8_I2 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_I8_I2","tags":"","loc":"proc/pack_data_i8_i2.html","title":"pack_data_I8_I2 – BeFoR64"},{"text":"pack_data_I8_I1 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_I8_I1","tags":"","loc":"proc/pack_data_i8_i1.html","title":"pack_data_I8_I1 – BeFoR64"},{"text":"pack_data_I4_R8 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_I4_R8","tags":"","loc":"proc/pack_data_i4_r8.html","title":"pack_data_I4_R8 – BeFoR64"},{"text":"pack_data_I4_R4 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_I4_R4","tags":"","loc":"proc/pack_data_i4_r4.html","title":"pack_data_I4_R4 – BeFoR64"},{"text":"pack_data_I4_I8 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_I4_I8","tags":"","loc":"proc/pack_data_i4_i8.html","title":"pack_data_I4_I8 – BeFoR64"},{"text":"pack_data_I4_I2 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_I4_I2","tags":"","loc":"proc/pack_data_i4_i2.html","title":"pack_data_I4_I2 – BeFoR64"},{"text":"pack_data_I4_I1 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_I4_I1","tags":"","loc":"proc/pack_data_i4_i1.html","title":"pack_data_I4_I1 – BeFoR64"},{"text":"pack_data_I2_R8 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_I2_R8","tags":"","loc":"proc/pack_data_i2_r8.html","title":"pack_data_I2_R8 – BeFoR64"},{"text":"pack_data_I2_R4 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_I2_R4","tags":"","loc":"proc/pack_data_i2_r4.html","title":"pack_data_I2_R4 – BeFoR64"},{"text":"pack_data_I2_I8 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_I2_I8","tags":"","loc":"proc/pack_data_i2_i8.html","title":"pack_data_I2_I8 – BeFoR64"},{"text":"pack_data_I2_I4 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_I2_I4","tags":"","loc":"proc/pack_data_i2_i4.html","title":"pack_data_I2_I4 – BeFoR64"},{"text":"pack_data_I2_I1 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_I2_I1","tags":"","loc":"proc/pack_data_i2_i1.html","title":"pack_data_I2_I1 – BeFoR64"},{"text":"pack_data_I1_R8 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_I1_R8","tags":"","loc":"proc/pack_data_i1_r8.html","title":"pack_data_I1_R8 – BeFoR64"},{"text":"pack_data_I1_R4 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_I1_R4","tags":"","loc":"proc/pack_data_i1_r4.html","title":"pack_data_I1_R4 – BeFoR64"},{"text":"pack_data_I1_I8 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_I1_I8","tags":"","loc":"proc/pack_data_i1_i8.html","title":"pack_data_I1_I8 – BeFoR64"},{"text":"pack_data_I1_I4 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_I1_I4","tags":"","loc":"proc/pack_data_i1_i4.html","title":"pack_data_I1_I4 – BeFoR64"},{"text":"pack_data_I1_I2 Subroutine Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data_I1_I2","tags":"","loc":"proc/pack_data_i1_i2.html","title":"pack_data_I1_I2 – BeFoR64"},{"text":"pack_data Interface Source File Lib_Pack_Data.f90 Lib_Pack_Data pack_data","tags":"","loc":"interface/pack_data.html","title":"pack_data – BeFoR64"},{"text":"b64_init Subroutine Source File Lib_Base64.f90 Lib_Base64 b64_init","tags":"","loc":"proc/b64_init.html","title":"b64_init – BeFoR64"},{"text":"encode_bits Subroutine Source File Lib_Base64.f90 Lib_Base64 encode_bits","tags":"","loc":"proc/encode_bits.html","title":"encode_bits – BeFoR64"},{"text":"b64_encode_R8_a Subroutine Source File Lib_Base64.f90 Lib_Base64 b64_encode_R8_a","tags":"","loc":"proc/b64_encode_r8_a.html","title":"b64_encode_R8_a – BeFoR64"},{"text":"b64_encode_R4_a Subroutine Source File Lib_Base64.f90 Lib_Base64 b64_encode_R4_a","tags":"","loc":"proc/b64_encode_r4_a.html","title":"b64_encode_R4_a – BeFoR64"},{"text":"b64_encode_I8_a Subroutine Source File Lib_Base64.f90 Lib_Base64 b64_encode_I8_a","tags":"","loc":"proc/b64_encode_i8_a.html","title":"b64_encode_I8_a – BeFoR64"},{"text":"b64_encode_I4_a Subroutine Source File Lib_Base64.f90 Lib_Base64 b64_encode_I4_a","tags":"","loc":"proc/b64_encode_i4_a.html","title":"b64_encode_I4_a – BeFoR64"},{"text":"b64_encode_I2_a Subroutine Source File Lib_Base64.f90 Lib_Base64 b64_encode_I2_a","tags":"","loc":"proc/b64_encode_i2_a.html","title":"b64_encode_I2_a – BeFoR64"},{"text":"b64_encode_I1_a Subroutine Source File Lib_Base64.f90 Lib_Base64 b64_encode_I1_a","tags":"","loc":"proc/b64_encode_i1_a.html","title":"b64_encode_I1_a – BeFoR64"},{"text":"autotest Subroutine Source File Lib_Base64.f90 Lib_Base64 autotest","tags":"","loc":"proc/autotest.html","title":"autotest – BeFoR64"},{"text":"b64_encode Interface Source File Lib_Base64.f90 Lib_Base64 b64_encode","tags":"","loc":"interface/b64_encode.html","title":"b64_encode – BeFoR64"},{"text":"IR_Precision Module Source File IR_Precision.f90 IR_Precision","tags":"","loc":"module/ir_precision.html","title":"IR_Precision – BeFoR64"},{"text":"Lib_Pack_Data Module Source File Lib_Pack_Data.f90 Lib_Pack_Data","tags":"","loc":"module/lib_pack_data.html","title":"Lib_Pack_Data – BeFoR64"},{"text":"Lib_Base64 Module Source File Lib_Base64.f90 Lib_Base64","tags":"","loc":"module/lib_base64.html","title":"Lib_Base64 – BeFoR64"},{"text":"Test_Driver Program Source File Test_Driver.f90 Test_Driver","tags":"","loc":"program/test_driver.html","title":"Test_Driver – BeFoR64"}]}