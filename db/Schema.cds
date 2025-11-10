namespace DSM;

context T{

    @cds.persistence.exists
    @cds.persistence.calcview
    entity NOTESVIEW {
        key NOTID           : Integer64    @title: 'NOTID: NOTID';
            DSMID           : Integer64    @title: 'DSMID: Foreign Key Disability ID Unique Id';
            NTSBY           : String(20)   @title: 'NTSBY: Notes Created by';
        key NTSTL           : Integer      @title: 'NTSTL: Notes Title';
            NTSDT           : Date         @title: 'NTSDT: Notes Date';
            NTSTM           : Time         @title: 'NTSTM: Notes Time ';
            NOTES           : String(5000) @title: 'NOTES: Notes ';
            NSBDT           : Date         @title: 'NSBDT: Notes Submitted Date';
            EMPID           : String(20)   @title: 'EMPID: Employee ID';
            NSBYNAME        : String(250)  @title: 'NSBYNAME: Employee name';
            MSTID           : Integer      @title: 'MSTID: MSTID';
            NOTESTITLENAMES : String(250)  @title: 'NOTESTITLENAMES: NOTESTITLENAMES';
            jn5plshoyxn5cyclw : Association to one M.MASTERVIEW
                                        on jn5plshoyxn5cyclw.MSTID = MSTID;
    }  
}
context M{

    @cds.persistence.exists
    @cds.persistence.calcview
    entity MASTERVIEW {
        key MSTID : Integer     @title: 'MSTID: Master ID';
            TYPES : String(250) @title: 'TYPES: Master Data Type';
            NAMES : String(250) @title: 'NAMES: Master Data Name';
            ISDEL : String(1)   @title: 'ISDEL: Is Deleted';
    }
}