var searchIndex = {};
searchIndex["libffi_sys"] = {"doc":"Low-level Rust bindings for libffi","items":[[3,"__BindgenUnionField","libffi_sys","",null,null],[3,"_ffi_type","","",null,null],[12,"size","","",0,null],[12,"alignment","","",0,null],[12,"type_","","",0,null],[12,"elements","","",0,null],[3,"ffi_cif","","",null,null],[12,"abi","","",1,null],[12,"nargs","","",1,null],[12,"arg_types","","",1,null],[12,"rtype","","",1,null],[12,"bytes","","",1,null],[12,"flags","","",1,null],[3,"ffi_raw","","",null,null],[12,"sint","","",2,null],[12,"uint","","",2,null],[12,"flt","","",2,null],[12,"data","","",2,null],[12,"ptr","","",2,null],[12,"bindgen_union_field","","",2,null],[3,"ffi_closure","","",null,null],[12,"tramp","","",3,null],[12,"cif","","",3,null],[12,"fun","","",3,null],[12,"user_data","","",3,null],[3,"ffi_raw_closure","","",null,null],[12,"tramp","","",4,null],[12,"cif","","",4,null],[12,"translate_args","","",4,null],[12,"this_closure","","",4,null],[12,"fun","","",4,null],[12,"user_data","","",4,null],[3,"ffi_java_raw_closure","","",null,null],[12,"tramp","","",5,null],[12,"cif","","",5,null],[12,"translate_args","","",5,null],[12,"this_closure","","",5,null],[12,"fun","","",5,null],[12,"user_data","","",5,null],[4,"ffi_abi","","",null,null],[13,"FFI_FIRST_ABI","","",6,null],[13,"FFI_SYSV","","",6,null],[13,"FFI_UNIX64","","",6,null],[13,"FFI_THISCALL","","",6,null],[13,"FFI_FASTCALL","","",6,null],[13,"FFI_STDCALL","","",6,null],[13,"FFI_PASCAL","","",6,null],[13,"FFI_REGISTER","","",6,null],[13,"FFI_LAST_ABI","","",6,null],[4,"ffi_status","","",null,null],[13,"FFI_OK","","",7,null],[13,"FFI_BAD_TYPEDEF","","",7,null],[13,"FFI_BAD_ABI","","",7,null],[4,"ffi_type_enum","","",null,null],[13,"STRUCT","","",8,null],[13,"COMPLEX","","",8,null],[7,"ffi_type_void","","",null,null],[7,"ffi_type_uint8","","",null,null],[7,"ffi_type_sint8","","",null,null],[7,"ffi_type_uint16","","",null,null],[7,"ffi_type_sint16","","",null,null],[7,"ffi_type_uint32","","",null,null],[7,"ffi_type_sint32","","",null,null],[7,"ffi_type_uint64","","",null,null],[7,"ffi_type_sint64","","",null,null],[7,"ffi_type_float","","",null,null],[7,"ffi_type_double","","",null,null],[7,"ffi_type_pointer","","",null,null],[7,"ffi_type_longdouble","","",null,null],[7,"ffi_type_complex_float","","",null,null],[7,"ffi_type_complex_double","","",null,null],[7,"ffi_type_complex_longdouble","","",null,null],[5,"ffi_prep_cif_core","","",null,null],[5,"ffi_raw_call","","",null,null],[5,"ffi_ptrarray_to_raw","","",null,null],[5,"ffi_raw_to_ptrarray","","",null,null],[5,"ffi_raw_size","","",null,null],[5,"ffi_java_raw_call","","",null,null],[5,"ffi_java_ptrarray_to_raw","","",null,null],[5,"ffi_java_raw_to_ptrarray","","",null,null],[5,"ffi_java_raw_size","","",null,null],[5,"ffi_closure_alloc","","",null,null],[5,"ffi_closure_free","","",null,null],[5,"ffi_prep_closure","","",null,null],[5,"ffi_prep_closure_loc","","",null,null],[5,"ffi_prep_raw_closure","","",null,null],[5,"ffi_prep_raw_closure_loc","","",null,null],[5,"ffi_prep_java_raw_closure","","",null,null],[5,"ffi_prep_java_raw_closure_loc","","",null,null],[5,"ffi_prep_cif","","",null,null],[5,"ffi_prep_cif_var","","",null,null],[5,"ffi_call","","",null,null],[11,"new","","",9,{"inputs":[],"output":{"name":"self"}}],[11,"as_ref","","",9,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"as_mut","","",9,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"default","","",9,{"inputs":[],"output":{"name":"self"}}],[11,"clone","","",9,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",6,{"inputs":[{"name":"self"}],"output":{"name":"ffi_abi"}}],[11,"eq","","",6,{"inputs":[{"name":"self"},{"name":"ffi_abi"}],"output":{"name":"bool"}}],[11,"hash","","",6,null],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"default","","",0,{"inputs":[],"output":{"name":"self"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"ffi_status"}}],[11,"eq","","",7,{"inputs":[{"name":"self"},{"name":"ffi_status"}],"output":{"name":"bool"}}],[11,"hash","","",7,null],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"default","","",1,{"inputs":[],"output":{"name":"self"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",2,{"inputs":[],"output":{"name":"ffi_raw"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"default","","",3,{"inputs":[],"output":{"name":"self"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"default","","",4,{"inputs":[],"output":{"name":"self"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"default","","",5,{"inputs":[],"output":{"name":"self"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",8,{"inputs":[{"name":"self"}],"output":{"name":"ffi_type_enum"}}],[11,"eq","","",8,{"inputs":[{"name":"self"},{"name":"ffi_type_enum"}],"output":{"name":"bool"}}],[11,"hash","","",8,null],[6,"ffi_arg","","",null,null],[6,"ffi_sarg","","",null,null],[6,"wchar_t","","",null,null],[6,"ffi_type","","",null,null],[6,"FFI_TYPE","","",null,null],[6,"ffi_java_raw","","",null,null],[17,"FFI_CLOSURES","","",null,null],[17,"FFI_TRAMPOLINE_SIZE","","",null,null],[17,"FFI_NATIVE_RAW_API","","",null,null],[17,"__DARWIN_ONLY_64_BIT_INO_T","","",null,null],[17,"__DARWIN_ONLY_VERS_1050","","",null,null],[17,"__DARWIN_ONLY_UNIX_CONFORMANCE","","",null,null],[17,"__DARWIN_UNIX03","","",null,null],[17,"__DARWIN_64_BIT_INO_T","","",null,null],[17,"__DARWIN_VERS_1050","","",null,null],[17,"__DARWIN_NON_CANCELABLE","","",null,null],[17,"__DARWIN_SUF_64_BIT_INO_T","","",null,null],[17,"__DARWIN_SUF_1050","","",null,null],[17,"__DARWIN_SUF_EXTSN","","",null,null],[17,"__DARWIN_C_ANSI","","",null,null],[17,"__DARWIN_C_FULL","","",null,null],[17,"__DARWIN_C_LEVEL","","",null,null],[17,"__STDC_WANT_LIB_EXT1__","","",null,null],[17,"_DARWIN_FEATURE_64_BIT_INODE","","",null,null],[17,"_DARWIN_FEATURE_ONLY_UNIX_CONFORMANCE","","",null,null],[17,"_DARWIN_FEATURE_UNIX_CONFORMANCE","","",null,null],[17,"__DARWIN_CLK_TCK","","",null,null],[17,"CHAR_BIT","","",null,null],[17,"MB_LEN_MAX","","",null,null],[17,"CLK_TCK","","",null,null],[17,"SCHAR_MAX","","",null,null],[17,"SCHAR_MIN","","",null,null],[17,"UCHAR_MAX","","",null,null],[17,"CHAR_MAX","","",null,null],[17,"CHAR_MIN","","",null,null],[17,"USHRT_MAX","","",null,null],[17,"SHRT_MAX","","",null,null],[17,"SHRT_MIN","","",null,null],[17,"UINT_MAX","","",null,null],[17,"INT_MAX","","",null,null],[17,"INT_MIN","","",null,null],[17,"ULONG_MAX","","",null,null],[17,"LONG_MAX","","",null,null],[17,"LONG_MIN","","",null,null],[17,"ULLONG_MAX","","",null,null],[17,"LLONG_MAX","","",null,null],[17,"LLONG_MIN","","",null,null],[17,"LONG_BIT","","",null,null],[17,"SSIZE_MAX","","",null,null],[17,"WORD_BIT","","",null,null],[17,"SIZE_T_MAX","","",null,null],[17,"UQUAD_MAX","","",null,null],[17,"QUAD_MAX","","",null,null],[17,"QUAD_MIN","","",null,null],[17,"ARG_MAX","","",null,null],[17,"CHILD_MAX","","",null,null],[17,"GID_MAX","","",null,null],[17,"LINK_MAX","","",null,null],[17,"MAX_CANON","","",null,null],[17,"MAX_INPUT","","",null,null],[17,"NAME_MAX","","",null,null],[17,"NGROUPS_MAX","","",null,null],[17,"UID_MAX","","",null,null],[17,"OPEN_MAX","","",null,null],[17,"PATH_MAX","","",null,null],[17,"PIPE_BUF","","",null,null],[17,"BC_BASE_MAX","","",null,null],[17,"BC_DIM_MAX","","",null,null],[17,"BC_SCALE_MAX","","",null,null],[17,"BC_STRING_MAX","","",null,null],[17,"CHARCLASS_NAME_MAX","","",null,null],[17,"COLL_WEIGHTS_MAX","","",null,null],[17,"EQUIV_CLASS_MAX","","",null,null],[17,"EXPR_NEST_MAX","","",null,null],[17,"LINE_MAX","","",null,null],[17,"RE_DUP_MAX","","",null,null],[17,"NZERO","","",null,null],[17,"_POSIX_ARG_MAX","","",null,null],[17,"_POSIX_CHILD_MAX","","",null,null],[17,"_POSIX_LINK_MAX","","",null,null],[17,"_POSIX_MAX_CANON","","",null,null],[17,"_POSIX_MAX_INPUT","","",null,null],[17,"_POSIX_NAME_MAX","","",null,null],[17,"_POSIX_NGROUPS_MAX","","",null,null],[17,"_POSIX_OPEN_MAX","","",null,null],[17,"_POSIX_PATH_MAX","","",null,null],[17,"_POSIX_PIPE_BUF","","",null,null],[17,"_POSIX_SSIZE_MAX","","",null,null],[17,"_POSIX_STREAM_MAX","","",null,null],[17,"_POSIX_TZNAME_MAX","","",null,null],[17,"_POSIX2_BC_BASE_MAX","","",null,null],[17,"_POSIX2_BC_DIM_MAX","","",null,null],[17,"_POSIX2_BC_SCALE_MAX","","",null,null],[17,"_POSIX2_BC_STRING_MAX","","",null,null],[17,"_POSIX2_EQUIV_CLASS_MAX","","",null,null],[17,"_POSIX2_EXPR_NEST_MAX","","",null,null],[17,"_POSIX2_LINE_MAX","","",null,null],[17,"_POSIX2_RE_DUP_MAX","","",null,null],[17,"_POSIX_AIO_LISTIO_MAX","","",null,null],[17,"_POSIX_AIO_MAX","","",null,null],[17,"_POSIX_DELAYTIMER_MAX","","",null,null],[17,"_POSIX_MQ_OPEN_MAX","","",null,null],[17,"_POSIX_MQ_PRIO_MAX","","",null,null],[17,"_POSIX_RTSIG_MAX","","",null,null],[17,"_POSIX_SEM_NSEMS_MAX","","",null,null],[17,"_POSIX_SEM_VALUE_MAX","","",null,null],[17,"_POSIX_SIGQUEUE_MAX","","",null,null],[17,"_POSIX_TIMER_MAX","","",null,null],[17,"_POSIX_CLOCKRES_MIN","","",null,null],[17,"_POSIX_THREAD_DESTRUCTOR_ITERATIONS","","",null,null],[17,"_POSIX_THREAD_KEYS_MAX","","",null,null],[17,"_POSIX_THREAD_THREADS_MAX","","",null,null],[17,"PTHREAD_DESTRUCTOR_ITERATIONS","","",null,null],[17,"PTHREAD_KEYS_MAX","","",null,null],[17,"PTHREAD_STACK_MIN","","",null,null],[17,"_POSIX_HOST_NAME_MAX","","",null,null],[17,"_POSIX_LOGIN_NAME_MAX","","",null,null],[17,"_POSIX_SS_REPL_MAX","","",null,null],[17,"_POSIX_SYMLINK_MAX","","",null,null],[17,"_POSIX_SYMLOOP_MAX","","",null,null],[17,"_POSIX_TRACE_EVENT_NAME_MAX","","",null,null],[17,"_POSIX_TRACE_NAME_MAX","","",null,null],[17,"_POSIX_TRACE_SYS_MAX","","",null,null],[17,"_POSIX_TRACE_USER_EVENT_MAX","","",null,null],[17,"_POSIX_TTY_NAME_MAX","","",null,null],[17,"_POSIX2_CHARCLASS_NAME_MAX","","",null,null],[17,"_POSIX2_COLL_WEIGHTS_MAX","","",null,null],[17,"_POSIX_RE_DUP_MAX","","",null,null],[17,"OFF_MIN","","",null,null],[17,"OFF_MAX","","",null,null],[17,"PASS_MAX","","",null,null],[17,"NL_ARGMAX","","",null,null],[17,"NL_LANGMAX","","",null,null],[17,"NL_MSGMAX","","",null,null],[17,"NL_NMAX","","",null,null],[17,"NL_SETMAX","","",null,null],[17,"NL_TEXTMAX","","",null,null],[17,"_XOPEN_IOV_MAX","","",null,null],[17,"IOV_MAX","","",null,null],[17,"_XOPEN_NAME_MAX","","",null,null],[17,"_XOPEN_PATH_MAX","","",null,null],[17,"FFI_64_BIT_MAX","","",null,null],[17,"FFI_SIZEOF_ARG","","",null,null],[17,"FFI_SIZEOF_JAVA_RAW","","",null,null],[17,"FFI_TYPE_VOID","","",null,null],[17,"FFI_TYPE_INT","","",null,null],[17,"FFI_TYPE_FLOAT","","",null,null],[17,"FFI_TYPE_DOUBLE","","",null,null],[17,"FFI_TYPE_LONGDOUBLE","","",null,null],[17,"FFI_TYPE_UINT8","","",null,null],[17,"FFI_TYPE_SINT8","","",null,null],[17,"FFI_TYPE_UINT16","","",null,null],[17,"FFI_TYPE_SINT16","","",null,null],[17,"FFI_TYPE_UINT32","","",null,null],[17,"FFI_TYPE_SINT32","","",null,null],[17,"FFI_TYPE_UINT64","","",null,null],[17,"FFI_TYPE_SINT64","","",null,null],[17,"FFI_TYPE_STRUCT","","",null,null],[17,"FFI_TYPE_POINTER","","",null,null],[17,"FFI_TYPE_COMPLEX","","",null,null],[17,"FFI_TYPE_LAST","","",null,null],[17,"ffi_abi_FFI_DEFAULT_ABI","","",null,null]],"paths":[[3,"_ffi_type"],[3,"ffi_cif"],[3,"ffi_raw"],[3,"ffi_closure"],[3,"ffi_raw_closure"],[3,"ffi_java_raw_closure"],[4,"ffi_abi"],[4,"ffi_status"],[4,"ffi_type_enum"],[3,"__BindgenUnionField"]]};
initSearch(searchIndex);
